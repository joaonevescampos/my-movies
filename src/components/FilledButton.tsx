import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import { Link } from "react-router-dom";

interface ButtonType {
  text: string;
  bgColor: string;
  path?: string;
}

export default function FilledButton({ text, bgColor, path = "" }: ButtonType) {
  const MyButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(bgColor),
    backgroundColor: bgColor,
    boxShadow: "none",
    textTransform: "none",
    fontSize: 12,
    fontWeight: "bold",
    padding: "6px 20px",
    lineHeight: 1.5,
    borderColor: "#0063cc",
    borderRadius: "30px",
    "&:hover": {
      backgroundColor: purple[700],
      color: theme.palette.getContrastText(purple[700]),
    },
  }));

  return (
    <Link to={`/${path}`}>
      <MyButton variant="contained"> {text} </MyButton>
    </Link>
  );
}
