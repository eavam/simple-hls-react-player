import React from 'react';
import { storiesOf } from '@storybook/react';
import PlayerHLS from '../index';

const url =
  'https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8';

storiesOf('PlayerHLS', module).add('default', () => <PlayerHLS url={url} title="Star Wars" />);
