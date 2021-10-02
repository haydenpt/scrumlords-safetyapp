import { Icon } from "@iconify/react";
import javascriptIcon from "@iconify-icons/cib/javascript";
// material
import { alpha, experimentalStyled as styled } from "@material-ui/core/styles";
import { Card, Typography, IconButton } from "@material-ui/core";
// utils

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  textAlign: "center",
  padding: theme.spacing(5, 0),
  color: theme.palette.warning.darker,
  backgroundColor: theme.palette.warning.lighter,
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
  color: theme.palette.warning.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(
    theme.palette.warning.dark,
    0
  )} 0%, ${alpha(theme.palette.warning.dark, 0.24)} 100%)`,
}));
import { useNavigate } from "react-router";
// ----------------------------------------------------------------------

const TP_INFO = {
  folderId: process.env.REACT_APP_TP_ROOT,
  name: "TransactionProcessing",
};

export default function TransactionProcessing() {
  const history = useNavigate();
  const gotoTp = () =>
    history(`/dashboard/tp/${TP_INFO.folderId}/${TP_INFO.name}`);
  return (
    <RootStyle>
      <IconWrapperStyle>
        <IconButton>
          <Icon icon={javascriptIcon} width={24} height={24} onClick={gotoTp} />
        </IconButton>
      </IconWrapperStyle>
      {/* <Typography variant="h3">{fShortenNumber(TOTAL)}</Typography> */}
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }} onClick={gotoTp}>
        Transaction Processing
      </Typography>
    </RootStyle>
  );
}
