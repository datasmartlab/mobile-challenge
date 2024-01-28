import { Text, View } from "react-native";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";
export const Container = styled(View)`
  backgroundcolor: #121214;
  flex: 1;
  paddingtop: 40px;
`;
export const CardInfos = styled(View)`
  backgroundColor: #ffffff;
  margin: 20px;
  minHeight: 200px;
  borderRadius: 10px;
  padding: 0px 10px;
`;
export const HeaderCard = styled(Text)`
  fontSize: 32px;
  fontWeight: bold;
  fontFamily: Roboto;
  padding: 10px 0px;
  color: #121214;
`;
export const DescriptionCard = styled(Text)`
  fontSize: 14px;
  color: #121218;
  minHeight: 150px;
`;
export const IconForBack = styled(AntDesign)`
  color: white;
  backgroundColor: transparent;
  padding: 3px;
  textAlign: center;
  position: absolute;
  top: 30px;
  left: 20px;
  zIndex: 1000;
  fontSize: 30px;
`;
