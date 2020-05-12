open ReactNative;

[@gentype]
[@react.component]
let make = (~children,~size=16.,~color="black") => {
  <Text
    style=Style.(arrayOption([|Some(textStyle(~fontSize=size,~color=color,()))|]))
  >
    children
  </Text>
};