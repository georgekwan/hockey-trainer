import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const MissShotInput = (props) => {
  const { totalShots, numberOfShotsLeft, setNumberOfShotsLeft, positionStyle, setMisses } = props;
  const [open, setOpen] = useState(false);
  const [myMisses, setMyMisses] = useState(0);

  const [items, setItems] = useState();
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

  return (
    <View style={[style, positionStyle]}>
      <DropDownPicker
        onSelectItem={(item) => {
          setMisses(item.value);
          setNumberOfShotsLeft((currval) => currval - item.value + myMisses);
        }}
        open={open}
        value={myMisses}
        items={items}
        setOpen={setOpen}
        setValue={setMyMisses}
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

export default React.memo(MissShotInput);
