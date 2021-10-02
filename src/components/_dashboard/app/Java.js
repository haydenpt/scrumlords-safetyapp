import { Icon } from "@iconify/react";
import javaIcon from "@iconify-icons/fontisto/java";
// material
import { alpha, experimentalStyled as styled } from "@material-ui/core/styles";
import { Card, IconButton, Typography } from "@material-ui/core";
// utils

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  textAlign: "center",
  padding: theme.spacing(5, 0),
  color: theme.palette.info.darker,
  backgroundColor: theme.palette.info.lighter,
}));

const IconWrapperStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: "center",
  marginBottom: theme.spacing(3),
  color: theme.palette.info.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(
    theme.palette.info.dark,
    0
  )} 0%, ${alpha(theme.palette.info.dark, 0.24)} 100%)`,
}));
import { useNavigate } from "react-router-dom";
// ----------------------------------------------------------------------

const JAVA_INFO = {
  folderId: process.env.REACT_APP_JAVA_ROOT,
  name: "Java",
};

export default function Java() {
  const history = useNavigate();
  const gotoJava = () => {
    history(`/dashboard/java/${JAVA_INFO.folderId}/${JAVA_INFO.name}`);
  };

  return (
    <RootStyle>
      <IconWrapperStyle>
        <IconButton>
          <Icon icon={javaIcon} width={24} height={24} onClick={gotoJava} />
        </IconButton>
      </IconWrapperStyle>
      {/* <Typography variant="h3">{fShortenNumber(TOTAL)}</Typography> */}
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }} onClick={gotoJava}>
        Java
      </Typography>
    </RootStyle>
  );
}
