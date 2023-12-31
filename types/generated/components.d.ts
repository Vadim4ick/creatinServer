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

export interface SectionsFormSend extends Schema.Component {
  collectionName: 'components_sections_form_sends';
  info: {
    displayName: 'FormSend';
    description: '';
  };
  attributes: {
    title: Attribute.RichText;
    description: Attribute.Text;
    address: Attribute.String;
    email: Attribute.Email;
    number: Attribute.BigInteger;
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
      'elements.intro-card': ElementsIntroCard;
      'sections.form-send': SectionsFormSend;
      'sections.partners': SectionsPartners;
      'ui.link': UiLink;
    }
  }
}
