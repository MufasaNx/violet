const Button = {
  MuiButton: {
    styleOverrides: {
      root: ({ ownerState }: any) => ({
        ...(ownerState.variant === 'contained' && {
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }),
        borderRadius: 8,
        textTransform: "none"
      }),
    },
  },
};

export default Button;