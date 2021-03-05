import * as React from 'react';
import { ISocialMediaProps } from './ISocialMediaProps';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
// import '../socialmedia.scss';

 export default class SocialMedia extends React.Component<ISocialMediaProps, {}> {
  public render(): React.ReactElement<ISocialMediaProps> {
    return (
      <div className='container-fluid'>
        <div className='row' style={{padding:'1rem'}}>
          <div className='col-md-3'>
          <a href="" aria-label="LinkedIn" target="_blank">
              <LinkedInIcon style={{fontSize:'5rem', color:'#00BD70'}}/>
           </a>
          </div>
          <div className='col-md-3'>
          <a href="" aria-label="Instagram" target="_blank">
             <InstagramIcon style={{fontSize:'5rem', color:'#00BD70'}}/>
          </a>
          </div>
          <div className='col-md-3'>
          <a href="" aria-label="Facebook" target="_blank">
              <FacebookIcon style={{fontSize:'5rem', color:'#00BD70'}}/>
          </a>
          </div>
          <div className='col-md-3'>
          <a href="" aria-label="Twitter" target="_blank">
              <TwitterIcon style={{fontSize:'5rem', color:'#00BD70'}}/>
          </a>
          </div>
        </div>
      </div>
    );
  }
}
