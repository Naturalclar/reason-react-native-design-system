open ReactNative;

[@gentype]
[@react.component]
let make = (~children,~onPress) => {
  <TouchableOpacity onPress=onPress>
  children
  </TouchableOpacity>
}