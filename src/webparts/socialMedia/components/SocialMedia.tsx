import * as React from 'react';
import styles from './SocialMedia.module.scss';
import { ISocialMediaProps } from './ISocialMediaProps';
import { escape } from '@microsoft/sp-lodash-subset';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import {Button} from "office-ui-fabric-react";
import { Face } from '@material-ui/icons';
// import '../socialmedia.scss';

 export default class SocialMedia extends React.Component<ISocialMediaProps, {}> {
  public render(): React.ReactElement<ISocialMediaProps> {
    return (
      <div className= { styles.socialMedia }>
        <div className = {styles.container}>
          <div className= "d-flex ${styles.row}">   
              <div className=" justify-content-around p-4{styles.column}">
                 <a href="https://www.linkedin.com/company/new-nexus/" className="display: block ${styles.button}"aria-label="LinkedIn" target="_blank">
                  <LinkedInIcon style={{fontSize:100, color:'#00BD70',padding:'0 1rem 0 1rem'}}/>
              </a> 
              </div>
              <div className="justify-content-around p-4{styles.column}">
                   <a href="https://www.instagram.com/newnexus_nl/" className="display: block ${styles.button}"aria-label="Instagram" target="_blank">
                    <InstagramIcon style={{fontSize:100, color:'#00BD70',padding:'0 1rem 0 1rem'}}/>
              </a> 
              </div>
              <div className="justify-content-around p-4{styles.column}">
                 <a href="https://web.facebook.com/NewNexusNL" className="display: block ${styles.button}"aria-label="Facebook" target="_blank">
                  <FacebookIcon style={{fontSize:100, color:'#00BD70',padding:'0 1rem 0 1rem'}}/>
                </a> 
              </div>
              <div className="justify-content-around p-4{styles.column}">
                 <a href="https://twitter.com/NewNexus_nl" className="display: block ${styles.button}"aria-label="Twitter" target="_blank">
                  <TwitterIcon style={{fontSize:100, color:'#00BD70',padding:'0 1rem 0 1rem'}}/>
                  </a> 
              </div>
          </div>
        </div>
      </div>
    );
  }
}
