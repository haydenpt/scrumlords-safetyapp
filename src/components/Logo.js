import PropTypes from "prop-types";
// material
import { Box } from "@material-ui/core";

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object,
};

export default function Logo({ sx }) {
  return (
    <Box
      component="img"
      src="/static/logo-png.png"
      sx={{ width: '30ch', height: '28ch', ...sx }}
      style={{
        position: "absolute",
        bottom: "70%",
        alignSelf: "center"
      }}
    />
  );
}
