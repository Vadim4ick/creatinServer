import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsHomeBanner extends Schema.Component {
  collectionName: 'components_components_home_banners';
  info: {
    displayName: 'HomeBanner';
    description: '';
  };
  attributes: {
    IntroCard: Attribute.Component<'elements.intro-card', true> &
      Attribute.SetMinMax<{
        max: 3;
      }>;
    banner: Attribute.Media;
    bannerMobile: Attribute.Media;
    bannerMasks: Attribute.Media;
  };
}

export interface ComponentsTextBlock extends Schema.Component {
  collectionName: 'components_components_text_blocks';
  info: {
    displayName: 'textBlock';
  };
  attributes: {
    titlle: Attribute.String & Attribute.Required;
    description: Attribute.RichText;
  };
}

export interface ElementsIntroCard extends Schema.Component {
  collectionName: 'components_elements_intro_cards';
  info: {
    displayName: 'IntroCard';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    info: Attribute.String;
    class: Attribute.Enumeration<['folders', 'spiral', '__image--group']>;
  };
}

export interface ElementsService extends Schema.Component {
  collectionName: 'components_elements_services';
  info: {
    displayName: 'Service';
    description: '';
  };
  attributes: {
    titleService: Attribute.String;
    descriptionService: Attribute.Text;
  };
}

export interface SectionsFormSend extends Schema.Component {
  collectionName: 'components_sections_form_sends';
  info: {
    displayName: 'FormSend';
    description: '';
  };
  attributes: {
    address: Attribute.String;
    email: Attribute.Email;
    number: Attribute.BigInteger;
    description: Attribute.RichText;
  };
}

export interface SectionsPartners extends Schema.Component {
  collectionName: 'components_sections_partners';
  info: {
    displayName: 'Partners';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    icons: Attribute.Media & Attribute.Required;
  };
}

export interface SectionsServices extends Schema.Component {
  collectionName: 'components_sections_services';
  info: {
    displayName: 'Services';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    services: Attribute.Component<'elements.service', true>;
  };
}

export interface UiLink extends Schema.Component {
  collectionName: 'components_ui_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    href: Attribute.String & Attribute.Required;
    name: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.home-banner': ComponentsHomeBanner;
      'components.text-block': ComponentsTextBlock;
      'elements.intro-card': ElementsIntroCard;
      'elements.service': ElementsService;
      'sections.form-send': SectionsFormSend;
      'sections.partners': SectionsPartners;
      'sections.services': SectionsServices;
      'ui.link': UiLink;
    }
  }
}
