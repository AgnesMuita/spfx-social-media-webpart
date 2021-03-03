import { SPHttpClient } from "@microsoft/sp-http";
export interface ISocialMediaProps {
  siteUrl: string;
  spHttpClient: SPHttpClient;
  context: any | null;
}