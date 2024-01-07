import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsFooter extends Schema.Component {
  collectionName: 'components_components_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    img: Attribute.Media;
  };
}

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

export interface ComponentsSliderCase extends Schema.Component {
  collectionName: 'components_components_slider_cases';
  info: {
    displayName: 'SliderCase';
  };
  attributes: {
    cases: Attribute.Relation<
      'components.slider-case',
      'oneToMany',
      'api::case.case'
    >;
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

export interface ComponentsVacancies extends Schema.Component {
  collectionName: 'components_components_vacancies';
  info: {
    displayName: 'vacancies';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media;
    date: Attribute.String;
    info: Attribute.String;
    vacancies: Attribute.Component<'elements.vacancy', true>;
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
    class: Attribute.Enumeration<
      ['folders', 'spiral', '__image--group', 'graph', 'trust', 'achievement']
    >;
  };
}

export interface ElementsTitle extends Schema.Component {
  collectionName: 'components_elements_titles';
  info: {
    displayName: 'Title';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

export interface ElementsVacancy extends Schema.Component {
  collectionName: 'components_elements_vacancies';
  info: {
    displayName: 'vacancy';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    level: Attribute.Enumeration<['middle', 'junior', 'senoir']>;
    descriptionVacancy: Attribute.RichText & Attribute.Required;
    btnLink: Attribute.String;
    telegrammLink: Attribute.String;
  };
}

export interface SectionsAboutSection extends Schema.Component {
  collectionName: 'components_sections_about_sections';
  info: {
    displayName: 'AboutSection';
  };
  attributes: {
    mainTitle: Attribute.String & Attribute.Required;
    description: Attribute.RichText;
    aboutTitle: Attribute.String & Attribute.Required;
    aboutDescription: Attribute.Text & Attribute.Required;
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

export interface SectionsSectionTitles extends Schema.Component {
  collectionName: 'components_sections_section_titles';
  info: {
    displayName: 'SectionTitles';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    titles: Attribute.Component<'elements.title', true>;
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
    service_collections: Attribute.Relation<
      'sections.services',
      'oneToMany',
      'api::service-collection.service-collection'
    >;
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
      'components.footer': ComponentsFooter;
      'components.home-banner': ComponentsHomeBanner;
      'components.slider-case': ComponentsSliderCase;
      'components.text-block': ComponentsTextBlock;
      'components.vacancies': ComponentsVacancies;
      'elements.intro-card': ElementsIntroCard;
      'elements.title': ElementsTitle;
      'elements.vacancy': ElementsVacancy;
      'sections.about-section': SectionsAboutSection;
      'sections.form-send': SectionsFormSend;
      'sections.partners': SectionsPartners;
      'sections.section-titles': SectionsSectionTitles;
      'sections.services': SectionsServices;
      'ui.link': UiLink;
    }
  }
}
