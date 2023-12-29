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
      'ui.link': UiLink;
    }
  }
}
