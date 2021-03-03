import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { SPComponentLoader } from "@microsoft/sp-loader";
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/site-users/web"; 
import * as strings from 'SocialMediaWebPartStrings';
import SocialMedia from './components/SocialMedia';
import { ISocialMediaProps } from './components/ISocialMediaProps';
import "jquery";
import "bootstrap";
let cssURL =
  "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css";
SPComponentLoader.loadCss(cssURL);

export interface ISocialMediaWebPartProps {
  description: string;
}

export default class SocialMediaWebPart extends BaseClientSideWebPart<ISocialMediaWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISocialMediaProps> = React.createElement(
      SocialMedia,
      {
       siteUrl: this.context.pageContext.web.absoluteUrl,
        spHttpClient: this.context.spHttpClient,
        context: this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }
  protected onInit(): Promise<void> {
    sp.setup({
      spfxContext: this.context,
    });
    return super.onInit();
  }

  // protected get dataVersion(): Version {
  //   return Version.parse('1.0');
  // }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
