import { useEffect, useState } from 'react';
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const MissShotInput = (props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [items, setItems] = useState();
  const { totalShots, numberOfShotsLeft, setNumberOfShotsLeft, positionStyle } = props;
  // const [items, setItems] = useState([
  //   { label: '1', value: 1, disabled: 1 >= props.numberOfShotsLeft },
  //   { label: '2', value: 2, disabled: 2 >= props.numberOfShotsLeft },
  //   { label: '3', value: 3, disabled: 3 >= props.numberOfShotsLeft },
  //   { label: '4', value: 5, disabled: 5 >= props.numberOfShotsLeft },
  //   { label: '6', value: 6, disabled: 6 >= props.numberOfShotsLeft },
  //   { label: '7', value: 7, disabled: 7 >= props.numberOfShotsLeft },
  //   { label: '8', value: 8, disabled: 8 >= props.numberOfShotsLeft },
  //   { label: '9', value: 9, disabled: 9 >= props.numberOfShotsLeft },
  //   { label: '10', value: 10, disabled: 10 >= props.numberOfShotsLeft },
  //   { label: '11', value: 11, disabled: 11 >= props.numberOfShotsLeft },
  // ]);
  let style = props.style;
  style = style || {};
  useEffect(() => {
    const newItems = Array(totalShots + 1)
      .fill(0)
      .map((_, index) => {
        return {
          value: index,
          label: index,
          disabled: index >= numberOfShotsLeft + 1,
        };
      });
    setItems(newItems);
  }, [numberOfShotsLeft]);

  // console.log('Position at: ', positionStyle);
  // console.log('value: ', value);
  // console.log('items: ', items);
  // console.log('numberOfShotsLeft: ', numberOfShotsLeft);

  return (
    <View style={[style, positionStyle]}>
      <DropDownPicker
        onOpen={() => {
          setValue(value);
        }}
        onSelectItem={(item) => {
          console.log('item', item);
          setNumberOfShotsLeft(numberOfShotsLeft - item.value + value);
        }}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        theme="LIGHT"
        multiple={false}
        style={{ width: 70 }}
        mode="SIMPLE"
        placeholder="1"
        dropDownContainerStyle={{ backgroundColor: 'gray', width: 50 }}
        showArrowIcon
        arrowIconStyle={{
          width: 30,
          height: 30,
        }}
      />
    </View>
  );
};

export default MissShotInput;
