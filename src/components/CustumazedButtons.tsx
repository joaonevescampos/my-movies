import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';

const FilledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#6700D4'),
  backgroundColor: '#6700D4',
    boxShadow: 'none',
  textTransform: 'none',
  fontSize: 12,
  fontWeight: 'bold',
  padding: '6px 20px',
  lineHeight: 1.5,
  borderColor: '#0063cc',
  borderRadius: '30px',
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

const WhiteButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#ffffff'),
  backgroundColor: '#ffffff',
    boxShadow: 'none',
  textTransform: 'none',
  fontSize: 12,
  fontWeight: 'bold',
  padding: '6px 20px',
  lineHeight: 1.5,
  borderColor: '#0063cc',
  borderRadius: '30px',
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

export default function CustomizedButtons() {
  return (
    <Stack spacing={2} direction="row">
      <FilledButton variant="contained">Assistir</FilledButton>
      <WhiteButton variant="contained">Trailer</WhiteButton>

    </Stack>
  );
}
