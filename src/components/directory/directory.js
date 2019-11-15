import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directorySelectors';
import MenuItem from '../menu-item/menu-item';

import { DirectoryStyles } from './directory.styles';

const Directory = props => {
  const { sections } = props;
  return (
    <DirectoryStyles>
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </DirectoryStyles>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
