// TO BE DELETE
const MissShotInput = ({ numberOfShotsLeft, setNumberOfShotsLeft, totalShots }) => {
  const [items, setItems] = useState();
  const [selectedValue, setSelectedValue] = useState(0);
  console.log('numberOfShotsLeft', numberOfShotsLeft);
  console.log('selectedValue', selectedValue);
  useEffect(() => {
    const newItems = Array(totalShots)
      .fill(0)
      .map((_, index) => {
        return {
          value: index + 1,
          label: index + 1,
          disabled: index >= numberOfShotsLeft,
        };
      });
    setItems(newItems);
  }, [numberOfShotsLeft]);
  return (
    <div className="miss-shot-input">
      <select
        onFocus={(e) => {
          console.log('I am focused');
          setSelectedValue(+e.target.value);
        }}
        onChange={(e) => {
          setNumberOfShotsLeft(numberOfShotsLeft - +e.target.value + selectedValue);
          e.target.blur();
        }}>
        <option value={0}>Select</option>
        {items &&
          items.map((item, index) => {
            return (
              <option disabled={index >= numberOfShotsLeft} value={item.value}>
                {item.label}
              </option>
            );
          })}
      </select>
    </div>
  );
};

function App() {
  const location = useLocation();
  const [numberOfShotsLeft, setNumberOfShotsLeft] = useState(11);
  return (
    <>
      <MissShotInput
        totalShots={11}
        numberOfShotsLeft={numberOfShotsLeft}
        setNumberOfShotsLeft={setNumberOfShotsLeft}
      />
      <MissShotInput
        totalShots={11}
        numberOfShotsLeft={numberOfShotsLeft}
        setNumberOfShotsLeft={setNumberOfShotsLeft}
      />
      <MissShotInput
        totalShots={11}
        numberOfShotsLeft={numberOfShotsLeft}
        setNumberOfShotsLeft={setNumberOfShotsLeft}
      />
      <MissShotInput
        totalShots={11}
        numberOfShotsLeft={numberOfShotsLeft}
        setNumberOfShotsLeft={setNumberOfShotsLeft}
      />
      <MissShotInput
        totalShots={11}
        numberOfShotsLeft={numberOfShotsLeft}
        setNumberOfShotsLeft={setNumberOfShotsLeft}
      />
    </>
  );
}

export default App;
