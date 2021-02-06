import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
  faYoutube,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const StyledIcon = styled(FontAwesomeIcon)`
  color: var(--text-highlight);
  font-size: 2.2rem;
  transition: color 0.2s ease-out;

`;

const socials = [    {
        name: 'Github',
        path: 'https://github.com/theMattMayfield',        
        icon: faGithub,
        id: 0
    },
    {
        name: 'LinkedIn',
        path: 'https://LinkedIn.com/theMattMayfield',        
        icon: faLinkedinIn,
        id: 1
    },
    {
        name: 'Instagram',
        path: 'https://instagram.com/theMattMayfield',        
        icon: faInstagram,
        id: 2
    },
    {
        name: 'Youtube',
        path: 'https://youtube.com/theMattMayfield',        
        icon: faYoutube,
        id: 3
    },
    {
        name: 'Twitter',
        path: '',        
        icon: faTwitter,
        id: 4
    }
]

const SocialLink = () => {
    return (
        socials.map((social, i) => (
            <a
className="no-underline rounded-full border-2 border-yellow-900 w-12 h-12 cursor-pointer flex items-center justify-center my-0"
  rel="noreferrer"
  target="_blank"
  aria-label={social.name}
  href={social.path}
>
  <StyledIcon className="w-6 h-6" icon={social.icon} />
</a>
        ))
    )
}

const Social = () => {

  return (
    <>
      <div className="flex items-center justify-center space-x-8">
        <SocialLink />
        
      </div>
     
    </>
  );
};

export default Social;