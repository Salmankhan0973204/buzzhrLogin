import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import green from "@mui/material/colors/green";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import "./styles.scss";
const dot = new RegExp(/[.]/);
const smallLetter = new RegExp(/[a-z]/);
const capitalLetter = new RegExp(/[A-Z]/);
const number = new RegExp(/\d/);
const specialChar = new RegExp(/[*/@!#%&()$`',?";:-=+_|><^~{}\]]/);
const PasswordCritera = ({ value }: any) => {
  const [minLength, setMinLength] = useState(false);
  const [hasUpper, setHasUpper] = useState(false);
  const [hasLower, setHasLower] = useState(false);
  const [hasSpecial, setHasSpecial] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasDot, setHasDot] = useState(true);
  const stateArray = [
    {
      id: minLength,
      error: "at least 8 characters",
    },
    {
      id: hasUpper,
      error: "one upper case letter",
    },
    {
      id: hasLower,
      error: "one lower case letter",
    },
    {
      id: hasSpecial,
      error: " one special character",
    },
    {
      id: hasNumber,
      error: "one number",
    },
    {
      id: hasDot,
      error: "cannot include a period",
    },
  ];

  useEffect(() => {
    setMinLength(value.length >= 8);
    setHasDot(!dot.test(value));
    setHasUpper(capitalLetter.test(value));
    setHasLower(smallLetter.test(value));
    setHasSpecial(specialChar.test(value));
    setHasNumber(number.test(value));
  }, [value]);

  return (
    <Box className="password-criteria">
      <Box className="password-criteria">
        <Box sx={{ mb: 1, mt: 0 }} component="h4">
           password must
        </Box>
        {stateArray.map((e,index) => {
          return (
            <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
              {!e.id && <CheckCircleIcon sx={{ fontSize: 15.5, color:"#cdcfdd" }} />}
              {e.id && <CheckCircleIcon sx={{ fontSize: 15.5, color: green[500] }} />}
              <Typography sx={{ pl: 1 }}>{e.error}</Typography>
            </Box>
          );
        })}
        <Box className="arrow"></Box>
      </Box>
    </Box>
  );
};

export default PasswordCritera;
