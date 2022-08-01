import React from 'react';
import { useSelector } from 'react-redux';

import * as s from './SideBarButton.styled';

/* 
  IconButton
  MarkerButton
*/
const SidebarButton = ({
  type = '',
  text = '',
  markerColor = '',
  activeButton,
  setActiveButton,
  onNavigate = () => null,
  IconComponent = () => null,
}) => {
  const count = useSelector(state => state.Posts.countOfList);

  const handleButtonOnClick = () => {
    setActiveButton(text);
    onNavigate();
  };

  // if (type === 'IconButton') {
  //   if (text === 'Read List') {
  //     return (
  //       <s.ButtonContainer onClick={onClickHandler}>
  //         <IconComponent />
  //         <s.ButtonText>{text}</s.ButtonText>
  //         <s.NumberOfList>{count}</s.NumberOfList>
  //       </s.ButtonContainer>
  //     );
  //   }
  //   if (text === 'Add new post') {
  //     return (
  //       <s.ButtonContainer>
  //         <IconComponent />
  //         <s.ButtonText style={{ color: '#868686' }}>{text}</s.ButtonText>
  //       </s.ButtonContainer>
  //     );
  //   }
  //   return (
  //     <s.ButtonContainer onClick={onClickHandler}>
  //       <IconComponent />
  //       <s.ButtonText>{text}</s.ButtonText>
  //     </s.ButtonContainer>
  //   );
  // }

  // if (type === 'MarkerButton') {
  //   return (
  //     <s.ButtonContainer style={{backgroundColor: '#ffffff'}}>
  //       <s.CircleIcon style={{ background: markerColor }} />
  //       <s.ButtonText>{text}</s.ButtonText>
  //     </s.ButtonContainer>
  //   );
  // }

  return (
    <s.ButtonContainer onClick={handleButtonOnClick} activeButton={activeButton === text}>
      {type === 'IconButton' ? <IconComponent /> : <s.CircleIcon style={{ background: markerColor }} />}
      <s.ButtonText>{text}</s.ButtonText>
      {text === 'Read List' && <s.NumberOfList>{count}</s.NumberOfList>}
    </s.ButtonContainer>
  );
};

export default SidebarButton;
