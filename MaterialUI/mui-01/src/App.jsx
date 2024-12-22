import CustomAutocomplete from "./inputs/Autocomplete";

function App() {

  function SimpleBackdrop() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
}

function CustomAutocomplete() {
  const names = ["clint", "aalok", "sarah", "james", "john"];
  const [time, setTime] = useState(7);

  function showBackDrop() {
    let countdown = time; // Use a local variable to track time
    const timer = setInterval(() => {
      if (countdown > 0) {
        console.log(countdown);

        countdown -= 1;
      } else {
        clearInterval(timer); // Clear the interval when time reaches 0
        console.log("Countdown finished!");
      }
    }, 1000); // Execute every 1 second
  }



  return (
    <>
      <CustomAutocomplete />
    </>
  );
}
}

export default App;
