import * as React from "react"
import Svg, { Defs, Path, LinearGradient, Stop, Use, G } from "react-native-svg"

interface Props {
  height?: number;
  width?: number;
  style?: any
}
function Logo(props:Props) {
  const {height=178,width=178,style={}} = props;
  return (
    <Svg viewBox="-0.996 -0.999 182 182" width={width} height={height} style={style}>
      <Defs>
        <Path
          d="M86.94 178v-.13h-3.19v-.13h-1.74v-.14h-1.73v-.13h-1.19v-.13h-1.07v-.14h-1.06v-.13h-1.07v-.13h-.93v-.14h-.67v-.13h-.8v-.13h-.66v-.14h-.8v-.13h-.8v-.13h-.53V176h-.67v-.13h-.53v-.13h-.53v-.14h-.67v-.13h-.53v-.13h-.53v-.13h-.54v-.14h-.53v-.13h-.53v-.13h-.4v-.14h-.53v-.13h-.4v-.13h-.53v-.14h-.4v-.13h-.54v-.13h-.4v-.14h-.4v-.13h-.39v-.13h-.4v-.14h-.4v-.13h-.4v-.13h-.4v-.13h-.4v-.14h-.4v-.13h-.4v-.13h-.4v-.14h-.27v-.13h-.4v-.13h-.26v-.14h-.4v-.13h-.27v-.13h-.4v-.14h-.4v-.13h-.26v-.13h-.4v-.14h-.27v-.13h-.4v-.13h-.26v-.13h-.4v-.14h-.27v-.13h-.27v-.13h-.26v-.14h-.27v-.13h-.4v-.13h-.26v-.14h-.27v-.13h-.27v-.13h-.26v-.14h-.4v-.13h-.27v-.13h-.26v-.14h-.27v-.13h-.27v-.13h-.26v-.13h-.27v-.14h-.27v-.13H49v-.13h-.27v-.14h-.26v-.13h-.27v-.13h-.27v-.14h-.26v-.13h-.27v-.13h-.27v-.14h-.26v-.13h-.27v-.13h-.13v-.14h-.27v-.13h-.26v-.13h-.27v-.14h-.13v-.13h-.27v-.13H45v-.13h-.26v-.14h-.14v-.13h-.26v-.13h-.27v-.14h-.13v-.13h-.27v-.13h-.26v-.14h-.27v-.13h-.13v-.13h-.27v-.14h-.27v-.13h-.13v-.13h-.27v-.14h-.13v-.13h-.26v-.13h-.14v-.13h-.26v-.14h-.27v-.13h-.13v-.13h-.27v-.14h-.13v-.13h-.27v-.13h-.13v-.14h-.27v-.13h-.13v-.13h-.27v-.14h-.26v-.13h-.14v-.13h-.13v-.14h-.27v-.13h-.13v-.13h-.27v-.13h-.13v-.14h-.13v-.13h-.27v-.13h-.13v-.14h-.27v-.13h-.13v-.13h-.13v-.14h-.27v-.13h-.13v-.13h-.27v-.14h-.13v-.13h-.14v-.13h-.26v-.14h-.14v-.13h-.13v-.13h-.27v-.13h-.13v-.14h-.13v-.13h-.27v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.26v-.14h-.14v-.13h-.13v-.13h-.13v-.14h-.27v-.13h-.13v-.13h-.14v-.14h-.26v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.27v-.13h-.13v-.13h-.13v-.14h-.14v-.13h-.13v-.13h-.13v-.14h-.27v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.13v-.14h-.14v-.13h-.26v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.27v-.13h-.13v-.13h-.13v-.14h-.14v-.13h-.13v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.13h-.13v-.14h-.14v-.13h-.13v-.13h-.27v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.13v-.14h-.14v-.13h-.13v-.13h-.13v-.14h-.14v-.13h-.13v-.26h-.13v-.14h-.14v-.13h-.13v-.13h-.13v-.14h-.14v-.13h-.13v-.13h-.13v-.14h-.14v-.13h-.13v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.26h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.27h-.13v-.13h-.13v-.13h-.13v-.14h-.14v-.13h-.13v-.13h-.13v-.14h-.14v-.26h-.13v-.13h-.13v-.14h-.14v-.13h-.13v-.13h-.13v-.14h-.14v-.26h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.27h-.13v-.13h-.13v-.14h-.14v-.13h-.13v-.26h-.13v-.14h-.14v-.13h-.13v-.27h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.26h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.27h-.13v-.13h-.13v-.13h-.14v-.27h-.13v-.13h-.13v-.27h-.13v-.13h-.14v-.27h-.13v-.13h-.13v-.14h-.14v-.26h-.13v-.14h-.13v-.26h-.14v-.13h-.13v-.14h-.13v-.26h-.14v-.14h-.13v-.26h-.13v-.14h-.14v-.13h-.13v-.27h-.13v-.13h-.13v-.27h-.14v-.26h-.13v-.14h-.13v-.26h-.14v-.13h-.13v-.27h-.13V137h-.14v-.27h-.13v-.13h-.13v-.27h-.14v-.27h-.13v-.13h-.13v-.27h-.14v-.13h-.13v-.26h-.13v-.14h-.13v-.26h-.14v-.27h-.13v-.27h-.13v-.13h-.14v-.27h-.13v-.26h-.13v-.27h-.14v-.13h-.13V133h-.13v-.26h-.14v-.27h-.13v-.13h-.13v-.27h-.14v-.27h-.13v-.26h-.13v-.14h-.13v-.26h-.14v-.27h-.13v-.26h-.13v-.27h-.14v-.27h-.13v-.26h-.13v-.27h-.14v-.27h-.13v-.26h-.13v-.27h-.14v-.26h-.13v-.27h-.13v-.27h-.14v-.26h-.13v-.27h-.13v-.27h-.14v-.26h-.13v-.27h-.13v-.4h-.13v-.26h-.14v-.27h-.13v-.27h-.13v-.26h-.14v-.4h-.13v-.27h-.13v-.26h-.14v-.27h-.13v-.4h-.13v-.27h-.14v-.4h-.13v-.26h-.13v-.4h-.14v-.27h-.13v-.4h-.13v-.26H6v-.4h-.14v-.27h-.13v-.4H5.6v-.27h-.14v-.39h-.13v-.4H5.2v-.4h-.14v-.4h-.13v-.4H4.8v-.4h-.14v-.4h-.13v-.4H4.4v-.4h-.14v-.4h-.13v-.4H4v-.4h-.13v-.53h-.14v-.4H3.6v-.53h-.13v-.4h-.14v-.53H3.2v-.4h-.13v-.54h-.14v-.4H2.8v-.53h-.13v-.66h-.14v-.54H2.4v-.53h-.13v-.66h-.14v-.54H2v-.53h-.13v-.67h-.13v-.66H1.6v-.8h-.13v-.8h-.13v-.66H1.2v-.8h-.13v-.8H.94v-1.07H.8v-1.06H.67v-1.07H.54v-1.06H.4v-1.73H.27v-1.87H.14V91.6H0v-5.19h.14v-2.93h.13v-1.73H.4v-1.74h.14v-1.19h.13v-.94H.8v-1.06h.14v-1.07h.13v-.93h.13v-.66h.14v-.8h.13v-.67h.13v-.8h.14v-.8h.13v-.53H2v-.66h.13v-.54h.14v-.53h.13v-.66h.13v-.54h.14v-.53h.13v-.53h.13v-.53h.14v-.4h.13v-.54h.13v-.4h.14v-.53h.13v-.4h.13v-.53h.14v-.4H4v-.53h.13v-.4h.13v-.4h.14v-.4h.13v-.4h.13v-.4h.14v-.4h.13v-.26h.13v-.4h.14v-.4h.13v-.4h.13v-.4h.14v-.27h.13v-.4h.13v-.4H6v-.26h.13v-.4h.13v-.27h.13v-.4h.14v-.27h.13v-.39h.13v-.27h.14v-.4h.13v-.27h.13v-.26h.14v-.4h.13v-.27h.13v-.26h.14v-.27h.13v-.27h.13v-.4h.14v-.26h.13v-.27h.13v-.27h.13v-.26h.14v-.4h.13v-.27h.13v-.26h.14v-.27h.13v-.27h.13v-.26h.14v-.27h.13v-.13h.13v-.27h.14v-.26h.13v-.27h.13v-.27h.14v-.26h.13v-.27h.13v-.27h.14v-.26h.13v-.27h.13v-.26h.13v-.14h.14v-.26h.13v-.27h.13v-.27h.14V45h.13v-.27h.13v-.26h.14v-.27h.13v-.13h.13v-.27h.14v-.26h.13v-.14h.13v-.26h.14v-.27h.13v-.27h.13v-.13h.13v-.27h.14v-.13h.13v-.26h.13v-.14h.14v-.26h.13v-.14h.13v-.26h.14v-.27h.13v-.13h.13v-.27h.14v-.13h.13v-.27h.13v-.13h.14v-.27h.13v-.26h.13v-.14h.13v-.13h.14v-.27h.13v-.13h.13v-.27h.14v-.13h.13v-.13h.13v-.27h.14v-.13h.13v-.27h.13v-.13h.14v-.27h.13v-.13h.13v-.13h.14v-.27h.13v-.13h.13v-.27h.13v-.13h.14v-.14h.13v-.26h.13v-.14h.14v-.13h.13v-.26h.13v-.14h.14v-.13h.13v-.13h.13v-.27h.14v-.13h.13v-.14h.13v-.13h.14v-.27h.13v-.13h.13v-.13h.14v-.14h.13v-.26h.13v-.13h.13v-.14h.14v-.26h.13v-.14h.13v-.13h.14v-.13h.13v-.14h.13v-.13h.14v-.27h.13v-.13h.13v-.13h.14v-.14h.13v-.13h.13v-.13h.14v-.27h.13v-.13h.13v-.13h.13v-.14h.14v-.13h.13v-.13h.13v-.27h.14v-.13h.13v-.14h.13v-.13h.14v-.13h.13v-.14h.13v-.13h.14v-.13h.13v-.13h.13v-.14h.14v-.13h.13v-.13h.13v-.27h.13v-.13h.14v-.14h.13v-.13h.13v-.13h.14v-.14h.13v-.13h.13v-.13h.14v-.14h.13v-.13h.13v-.13h.14v-.14h.13v-.13h.13v-.13h.14v-.13h.13v-.14h.13v-.13h.13v-.13h.14v-.14h.13v-.13h.13v-.13h.14v-.14h.13v-.13h.13v-.13h.14v-.14h.13v-.13h.13v-.13h.14v-.14h.13v-.13h.13v-.13h.27v-.13h.13v-.14h.14v-.13h.13v-.13h.13v-.14h.13v-.13h.14v-.13h.13v-.14h.13v-.13h.14v-.13h.13v-.14h.13v-.13h.27v-.13h.13v-.14h.14v-.13h.13v-.13h.13v-.13h.14v-.14h.26v-.13h.13v-.13h.14v-.14h.13v-.13h.13v-.13h.14v-.14h.13v-.13h.27v-.13h.13v-.14h.13v-.13h.14v-.13h.13v-.14h.27v-.13h.13v-.13h.13v-.13h.13v-.14h.27v-.13h.13v-.13h.14v-.14h.26v-.13h.14v-.13h.13v-.14h.13v-.13h.27v-.13h.13v-.14h.14v-.13h.13v-.13h.26v-.14h.14v-.13h.13v-.13h.27v-.14h.13v-.13h.13v-.13h.27v-.13h.13v-.14h.27v-.13h.13v-.13h.14v-.14h.26v-.13h.14v-.13h.26v-.14h.13v-.13h.14v-.13h.26v-.14h.14v-.13h.26v-.13h.14v-.14h.13v-.13h.27v-.13h.13v-.13h.27v-.14h.13v-.13h.26v-.13h.27v-.14h.13v-.13h.27v-.13h.13v-.14h.27v-.13h.13v-.13h.27v-.14h.13v-.13h.27v-.13h.26v-.14h.14v-.13h.26v-.13h.14v-.13h.26v-.14h.27v-.13h.13v-.13h.27v-.14h.27v-.13h.26v-.13h.13v-.14h.27v-.13h.27v-.13h.13v-.14h.27v-.13h.26v-.13h.27v-.14h.13v-.13h.27v-.13h.27v-.13h.26v-.14h.27v-.13h.26v-.13h.27v-.14h.13v-.13h.27v-.13h.27v-.14h.26v-.13h.27v-.13h.26v-.14h.27v-.13h.27v-.13h.26v-.14h.27v-.13h.27v-.13h.26v-.13h.27v-.14h.26v-.13h.4v-.13h.27v-.14h.27v-.13h.26v-.13h.27v-.14h.4v-.13h.26v-.13h.27v-.14h.27v-.13h.4v-.13h.26v-.14h.27v-.13h.4v-.13h.26v-.14h.4v-.13h.27v-.13h.4v-.13h.27v-.14h.4v-.13h.4v-.13h.26v-.14h.4v-.13h.27v-.13h.4v-.14h.4v-.13h.4v-.13h.39v-.14h.4v-.13h.4v-.13h.4v-.14h.4v-.13h.4v-.13h.4V4h.4v-.14h.4v-.13h.53V3.6h.4v-.14h.53v-.13h.4V3.2h.54v-.14h.4v-.13h.53V2.8h.53v-.14h.53v-.13h.54V2.4h.66v-.14h.53v-.13h.54V2h.66v-.13h.53v-.14h.8V1.6h.67v-.13h.8v-.14h.66V1.2h.8v-.13h.8V.93h1.07V.8h1.06V.67h.93V.53h1.07V.4h1.6V.27h1.86V.13h2.13V0h7.59v.13h2.26v.14h1.73V.4h1.6v.13h1.07v.14h1.06V.8h.93v.13h1.07v.14h.8v.13h.8v.13h.66v.14h.8v.13h.67v.13h.79v.14h.54V2h.66v.13h.53v.13h.54v.14h.66v.13h.54v.13h.53v.14h.53v.13h.53v.13h.4v.14h.54v.13h.39v.13h.54v.14h.4v.13h.53v.13h.4V4h.53v.13h.27v.13h.4v.13h.4v.14h.4v.13h.39v.13h.4v.14h.4v.13h.4v.13h.4v.14h.4v.13h.4v.13h.27v.14h.4v.13h.26v.13h.4v.14h.27v.13h.4v.13h.26v.13h.4v.14h.27v.13h.4v.13h.27v.14h.4v.13h.26v.13h.27v.14h.26v.13h.27v.13h.4v.14h.27v.13h.26v.13h.27v.14h.4v.13h.26v.13h.27v.14h.27v.13h.26v.13h.27v.13h.27v.14h.26v.13h.27v.13h.26v.14h.27v.13h.27v.13h.26v.14h.27v.13h.27v.13h.26v.14h.27v.13h.26v.13h.14v.14h.26v.13h.27v.13h.27v.13h.13v.14h.27v.13h.26v.13h.27v.14h.13v.13h.27v.13h.26v.14h.27v.13h.13v.13h.27v.14h.27v.13h.26v.13h.14v.14h.26v.13h.13v.13h.27v.13h.27v.14h.13v.13h.27v.13h.13v.14h.27v.13h.13v.13h.27v.14h.13v.13h.26v.13h.27v.14h.13v.13h.27v.13h.13v.14h.27v.13h.13v.13h.27v.13h.13v.14h.27v.13h.13v.13h.13v.14h.27v.13h.13v.13h.27v.14h.13v.13h.14v.13h.26v.14h.14v.13h.26v.13h.14v.14h.13v.13h.27v.13h.13v.13h.26v.14h.14v.13h.13v.13h.13v.14h.27v.13h.13v.13h.14v.14h.26v.13h.14v.13h.13v.14h.13v.13h.27v.13h.13v.14h.13v.13h.14v.13h.26v.14h.14v.13h.13v.13h.27v.13h.13v.14h.13v.13h.14v.13h.13v.14h.27v.13h.13v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.27v.13h.13v.14h.14v.13h.13v.13h.13v.13h.14v.14h.26v.13h.14v.13h.13v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.27v.13h.13v.14h.13v.13h.14v.13h.13v.13h.13v.14h.14v.13h.13v.13h.13v.14h.14v.13h.13v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.13h.13v.14h.14v.13h.13v.13h.13v.14h.14v.13h.13v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.14v.27h.13v.13h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.13v.13h.14v.27h.13v.13h.13v.14h.14v.13h.13v.13h.13v.14h.14v.26h.13v.13h.13v.14h.14v.13h.13v.13h.13v.14h.14v.13h.13v.27h.13v.13h.13v.13h.14v.14h.13v.13h.13v.27h.14v.13h.13v.13h.13v.27h.14v.13h.13v.13h.13v.14h.14v.26h.13v.14h.13v.13h.14v.13h.13v.27h.13v.13h.14v.14h.13v.26h.13v.13h.13v.14h.14v.13h.13v.27h.13v.13h.14v.27h.13v.13h.13v.13h.14v.27h.13v.13h.13v.27h.14v.13h.13v.14h.13v.26h.14v.13h.13v.27h.13v.13h.13v.27h.14v.13h.13v.14h.13v.26h.14v.14h.13v.26h.13v.14h.14v.26h.13v.13h.13v.27h.14v.27h.13v.13h.13v.27h.14v.13h.13v.27h.13v.13h.13v.27h.14v.26h.13v.13h.13v.27h.14v.13h.13v.27h.13v.27h.14v.13h.13v.27h.13v.26h.14v.14h.13v.26h.13v.27h.14v.26h.13v.14h.13v.26h.13v.27h.14v.27h.13v.13h.13v.27h.14v.26h.13v.27h.13v.26h.14v.27h.13v.13h.13v.27h.14v.27h.13v.26h.13v.27h.14v.27h.13v.26h.13v.27h.14v.26h.13v.27h.13v.27h.13v.26h.14v.27h.13v.27h.13v.26h.14v.4h.13v.27h.13v.26h.14v.27h.13v.4h.13v.27h.14v.26h.13v.27h.13v.26h.14v.4h.13v.27h.13v.27h.13v.4h.14v.26h.13v.4h.13v.27h.14v.4h.13v.4h.13v.26h.14v.4h.13v.27h.13v.4h.14v.26h.13v.4h.13v.4h.14v.4h.13v.4h.13v.4h.13v.4h.14v.4h.13v.4h.13v.4h.14v.4h.13v.4h.13v.53h.14v.4h.13v.53h.13v.4h.14v.53h.13v.4h.13v.54h.14v.4h.13v.53h.13v.53h.13v.67h.14v.53h.13v.53h.13v.67h.14v.53h.13v.66h.13v.67h.14v.8h.13v.66h.13v.8h.14v.8h.13v.8h.13v1.07h.14v.93h.13v1.06h.13v1.07h.14v1.73h.13v1.73h.13v2.53h.13v6.39h-.13v2.53h-.13v1.86h-.13v1.33h-.27v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14V92h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13V90h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13V88h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14H139v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.13H137v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13H135v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14V47h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13V45h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13V43h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.27v.13h-.13v.13h-.14v.14h-.13v.13h-.13v.27h-.14v.13h-.13v.13h-.13v.14h-.14v.13h-.13v.13h-.13v.14h-.14v.26h-.13v.14h-.13v.13h-.13v.13h-.14v.13h-.13v.14h-.13v.13h-.14v.27h-.13v.13h-.13v.13h-.14v.14h-.13v.13h-.13v.13h-.14v.14h-.13v.26h-.13v.14h-.14v.13h-.13v.13h-.13v.13h-.13v.14h-.14v.13h-.13v.27h-.13v.13h-.14v.13h-.13v.14h-.13v.13h-.14v.13h-.13v.14h-.13v.26h-.14v.14h-.13v.13h-.13v.13h-.14v.13h-.13v.14h-.13v.13h-.14v.27h-.13v.13h-.13v.13h-.13v.14h-.14v.13h-.13v.13h-.13v.14h-.14v.26h-.13v.14h-.13v.13h-.14v.13h-.13v.14h-.13v.13h-.14v.13h-.13v.27h-.13v.13h-.14v.13h-.13v.14h-.13v.13h-.13v.13h-.14v.14h-.13v.26h-.13v.14h-.14v.13h-.13v.13h-.13v.14h-.14v.13h-.13v.13h-.13v.27h-.14v.13h-.13v.13h-.13v.14h-.14v.13h-.13v.13h-.13v.14h-.13v.26h-.14v.14h-.13v.13h-.13v.13h-.14v.14h-.13v.13h-.13v.13h-.14v.27h-.13v.13h-.13v.13h-.14v.14h-.13v.13h-.13V43h-.14v.14h-.13v.26h-.13v.14h-.13v.13h-.14v.13h-.13v.14h-.13v.13h-.14v.13h-.13v.27h-.13v.13h-.14v.13h-.13v.14H94V45h-.14v.13h-.13v.14h-.13v.26h-.14v.14h-.13v.13h-.13v.13h-.13v.14h-.14v.13h-.13v.13h-.13v.27h-.14v.13h-.13v.13h-.13V47h-.14v.13H92v.13h-.13v.14h-.14v.26h-.13v.14h-.13v.13h-.14v.13h-.13v.14h-.13v.13h-.14v.13h-.13v.27h-.13v.13h-.13v.13h-.14v.14h-.13v.13h-.13v.13H90v.14h-.13v.26h-.13v.14h-.14v.13h-.13v.13h-.13v.14h-.14v.13h-.13v.13h-.13v.27h-.14v.13h-.13v.13h-.13v.14h-.13v.13h-.14v.13h-.13v.14h-.13v.26h-.14v.14h-.13v.13h-.13v.13h-.14v.14h-.13v.13h-.13v.13h-.14v.27h-.13v.13h-.13v.13h-.14v.14h-.13v.13h-.13v.13h-.13v.14h-.14v.26h-.13v.14h-.13v.13h-.14v.13h-.13v.14h-.13v.13h-.14v.13h-.13v.27h-.13v.13h-.14v.13h-.13v.14h-.13v.13h-.14v.13h-.13v.14h-.13v.26h-.13v.14h-.14v.13h-.13v.13h-.13v.14h-.14v.13h-.13v.13h-.13v.27h-.14v.13h-.13v.14h-.13v.13h-.14v.13h-.13v.13h-.13v.14h-.14v.26h-.13v.14h-.13v.13h-.14v.13h-.13v.14h-.13v.13h-.13v.13h-.14v.27h-.13v.13h-.13v.14h-.14v.13h-.13v.13h-.13v.13h-.14v.14h-.13v.26h-.13v.14h-.14v.13h-.13v.13h-.13v.14h-.14v.13h-.13v.13h-.13v.27h-.13v.13h-.14v.14h-.13v.13h-.13v.13h-.14v.13h-.13v.14h-.13v.26h-.14v.14h-.13v.13h-.13v.13h-.14v.14h-.13v.13h-.13v.13h-.14v.27h-.13v.13h-.13v.14h-.13v.13h-.14v.13h-.13v.13h-.13v.14h-.14v.26h-.13v.14h-.13v.13h-.14v.13h-.13v.14h-.13v.13h-.14v.13h-.13v.27h-.13v.13h-.14v.14h-.13v.13h-.13v.13h-.13v.14h-.14v.13h-.13v.26h-.13v.14h-.14v.13h-.13v.13h-.13v.14h-.14v.13h-.13v.13h-.13v.27h-.14v.13h-.13v.14h-.13v.13h-.14v.13h-.13v.14h-.13v.13h-.14v.26h-.13v.14h-.13v.13h-.13v.13h-.14v.14h-.13v.13h-.13v.13h-.14v.27h-.13v.13h-.13v.14h-.14v.13h-.13v.13h-.13v.14h-.14v.13h-.13v.26h-.13v.14h-.14v.13h-.13v.13h-.13v.14h-.13v.13h-.14v.13h-.13v.27h-.13v.13h-.14v.14h-.13v.13h-.13v.13h-.14v.14h-.13v.13h-.13v.26h-.14v.14h-.13v.13h-.13v.13h-.14v.14h-.13v.13h-.13v.13h-.13v.27h-.14v.13h-.13v.14h-.13v.13h-.14v.13h-.13v.14h-.13v.13h-.14v.27h-.13v.13h-.13v.13h-.14v.13h-.13v.14h-.13v.13h-.14v.13h-.13v.27h-.13v.13h-.13v.14h-.14v.13h-.13v.13h-.13v.14h-.14v.13h-.13v.27h-.13v.13h-.14v.13h-.13v.13h-.13v.14h-.14v.13h-.13v.13h-.13v.27h-.14v.13h-.13v.14h-.13v.13h-.14v.4h-.13v.4h-.13v.26h-.13v.4h-.14v.4h-.13v.27h-.13v.4h-.14v.4h-.13v.4h-.13v.26h-.14v.4h-.13v.4h-.13v.27h-.14v.4h-.13v.4h-.13v.26h-.14v.4h-.13v.4h-.13v.27h-.13v.4h-.14v.4h-.13v.4h-.13v.26h-.14v.4h-.13v.4h-.13v.27h-.14v.4h-.13v.4h-.13v.26h-.14v.4h-.13v.4h-.13v.4h-.14v.27h-.13v.4h-.13v.4h-.13v.26h-.14v.4h-.13v.4h-.13v.27h-.14v.4h-.13v.4h-.13v.26h-.14v.4h-.13v.4h-.13v.4h-.14v.27h-.13v.4h-.13v.4h-.14v.26h-.13v.4h-.13v.4h-.13v.27h-.14v.4h-.13v.4h-.13v.4h-.14v.26h-.13v.4h-.13v.4h-.14v.27h-.13v.4h-.13v.4h-.14v.26h-.13v.4h-.13v.4h-.14v.27h-.13v.4h-.13v.4h-.14v.4h-.13v.26h-.13v.4h-.13v.4h-.14v.27h-.13v.4h-.13v.4h-.14v.26h-.13v.4h-.13v.4h-.14v.4h-.13v.27h-.13v.4h-.14v.4h-.13v.79h.13v.67h.14v.53h.13v.67h.13v.66h.14v.67h.13v.67h.13v.53h.14v.66h.13v.67h.13v.67h.14v.66h.13v.53h.13v.67h.13v.66h.14v.67h.13v.67h.13v.53h.14v.66h.13v.67h.13v.67h.14v.66h.13v.53h.13v.67h.14v.67h.13v.66h.13v.67h.14v.53h.13v.66h.13v.67h.14v.67h.13v.66h.13v.53h.13v.67h.14v.67h.13v.66h.13v.67h.14v.66h.13v.54h.13v.66h.14v.67h.13v.66h.13v.67h.14v.53h.13v.27h.13v.13h.14v.13h.13v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14H90v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.13H92v.14h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13H94v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.14v.13h.13v.14h.13v.13h.13v.13h.14v.14h-1.07v.13h-1.33v.13h-1.6v.14h-1.73v.13h-3.19v.13"
          id="prefix__a"
        />
        <Path
          d="M99.72 177.34v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14V176h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13H94v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14H92v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13H90v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.14h-.13v-.13h-.13v-.13h-.14v-.13h-.13v-.14h-.13v-.13h-.13V137h-.14v-.14h-.13v-.13h-.13v-.27h-.14v-.53h-.13v-.66h-.13v-.67h-.14v-.67h-.13v-.66h-.13v-.67h-.14v-.53h-.13v-.67h-.13v-.66h-.14v-.67h-.13v-.66h-.13v-.54h-.13v-.66h-.14v-.67h-.13v-.66h-.13v-.67h-.14v-.53h-.13v-.67h-.13v-.66h-.14v-.67h-.13v-.66h-.13v-.54h-.14v-.66h-.13v-.67h-.13v-.66h-.14v-.67h-.13v-.53h-.13v-.67h-.14v-.66h-.13v-.67h-.13v-.66h-.13v-.54h-.14v-.66h-.13v-.67h-.13v-.66h-.14v-.67h-.13v-.53h-.13v-.67h-.14v-.66h-.13v-.67h-.13v-.66h-.14v-.54h-.13v-.66h-.13v-1.07h.13v-.4h.13v-.4h.14v-.26h.13v-.4h.13v-.4h.14v-.4h.13v-.27h.13v-.4h.14v-.4h.13v-.26h.13v-.4h.14v-.4h.13v-.27h.13v-.4h.13v-.4h.14v-.26h.13v-.4h.13v-.4h.14v-.4h.13v-.27h.13v-.4h.14v-.4h.13v-.26h.13v-.4h.14v-.4h.13v-.27h.13v-.4h.14v-.4h.13v-.39h.13v-.27h.14v-.4h.13v-.4h.13v-.27h.13v-.4h.14v-.39h.13v-.27h.13v-.4h.14v-.4h.13v-.27h.13v-.4h.14v-.39h.13v-.4h.13v-.27h.14v-.4h.13v-.4h.13v-.27h.14v-.4h.13v-.39h.13v-.27h.13V90h.14v-.4h.13v-.4h.13v-.27h.14v-.39h.13v-.4h.13v-.27h.14v-.4h.13v-.4h.13v-.27h.14v-.39h.13v-.4h.13v-.27h.14v-.4h.13v-.4h.13v-.4h.13v-.26h.14v-.4h.13v-.4h.13v-.27h.14v-.4h.13v-.4h.13v-.27h.14v-.39h.13v-.4h.13v-.4h.14v-.27h.13v-.4h.13v-.4h.14v-.26h.13v-.4h.13v-.4h.13v-.14h.14v-.13h.13v-.13h.13v-.27h.14v-.13h.13v-.14h.13v-.13h.14v-.13h.13v-.13h.13v-.14h.14v-.26h.13v-.14h.13v-.13h.14v-.13h.13v-.14h.13v-.13h.14v-.13h.13v-.27h.13v-.13h.13v-.14h.14v-.13h.13v-.13h.13v-.13h.14v-.14h.13v-.26h.13v-.14h.14v-.13h.13v-.13h.13v-.14h.14v-.13h.13v-.13h.13v-.27h.14v-.13h.13v-.14h.13v-.13h.13v-.13h.14v-.14h.13v-.13h.13v-.26h.14v-.14h.13v-.13h.13v-.13h.14v-.14h.13v-.13h.13v-.13h.14v-.27h.13v-.13h.13v-.14h.14v-.13h.13v-.13h.13v-.14h.13v-.13h.14v-.26h.13v-.14h.13v-.13h.14v-.13h.13v-.14h.13v-.13h.14v-.13h.13v-.27h.13v-.13h.14v-.14h.13v-.13h.13v-.13h.14v-.14h.13v-.13h.13v-.26h.13v-.14h.14v-.13h.13v-.13h.13v-.14h.14v-.13h.13v-.13h.13v-.27h.14v-.13h.13v-.14h.13v-.13h.14v-.13h.13v-.14h.13v-.13h.14v-.26h.13v-.14h.13v-.13h.14v-.13h.13v-.14h.13v-.13h.13v-.13h.14v-.27h.13v-.13h.13v-.14h.14v-.13h.13v-.13h.13v-.14h.14v-.13h.13v-.27h.13v-.13h.14v-.13h.13v-.13h.13v-.14h.14v-.13h.13v-.13h.13v-.27h.13v-.13h.14v-.14h.13v-.13h.13v-.13h.14v-.14h.13v-.13h.13v-.27h.14v-.13h.13v-.13h.13v-.13h.14v-.14h.13v-.13h.13v-.13h.14v-.27h.13v-.13h.13v-.14h.13v-.13h.14v-.13h.13v-.14h.13v-.13h.14v-.27h.13v-.13h.13v-.13h.14v-.13h.13v-.14h.13v-.13h.14v-.13h.13v-.27h.13v-.13h.14v-.14h.13v-.13h.13v-.13h.13v-.14h.14v-.13h.13v-.27h.13v-.13h.14v-.13h.13v-.13h.13v-.14h.14v-.13h.13v-.13h.13v-.27h.14v-.13h.13v-.14h.13v-.13h.14v-.13h.13v-.14h.13v-.13h.14v-.27h.13v-.13h.13v-.13h.13v-.14h.14v-.13h.13v-.13h.13v-.13h.14v-.27h.13v-.13h.13v-.14h.14v-.13h.13v-.13h.13v-.14h.14v-.13h.13v-.27h.13v-.13h.14v-.13h.13v-.14h.13v-.13h.13v-.13h.14v-.13h.13v-.27h.13v-.13h.14v-.14h.13v-.13h.13v-.13h.14v-.14h.13v-.13h.13v-.27h.14v-.13h.13v-.13h.13v-.14h.14v-.13h.13v-.13h.13v-.13h.13v-.27h.14v-.13h.13v-.14h.13v-.13h.14v-.13h.13v-.14h.13v-.13h.14v-.27h.13v-.13H90v-.13h.14v-.14h.13v-.13h.13v-.13h.14v-.13h.13v-.27h.13v-.13h.13v-.14h.14v-.13h.13v-.13h.13v-.14h.14v-.13h.13v-.27h.13v-.13h.14V47H92v-.14h.13v-.13h.14v-.13h.13v-.13h.13v-.27h.14v-.13h.13v-.14h.13v-.13h.14v-.13h.13v-.14h.13v-.13h.13v-.27h.14V45h.13v-.13h.13v-.14H94v-.13h.13v-.13h.13v-.14h.14v-.26h.13v-.13h.13v-.14h.14v-.13h.13v-.13h.13v-.14h.14v-.13h.13V43h.13v-.13h.13v-.13h.14v-.14h.13v-.13h.13v-.13h.14v-.14h.13v-.26h.13v-.13h.14v-.14h.13v-.13h.13v-.13h.14v-.14h.13v-.13h.13v-.27h.14v-.13h.13v-.13h.13v-.14h.13v-.13h.14v-.13h.13v-.14h.13v-.26h.14v-.13h.13v-.14h.13v-.13h.14v-.13h.13v-.14h.13v-.13h.14v-.27h.13v-.13h.13v-.13h.14v-.14h.13v-.13h.13v-.13h.13v-.14h.14v-.26h.13v-.13h.13v-.14h.14v-.13h.13v-.13h.13v-.14h.14v-.13h.13v-.27h.13v-.13h.14v-.13h.13v-.14h.13v-.13h.14v-.13h.13v-.14h.13v-.26h.13v-.14h.14v-.13h.13v-.13h.13v-.13h.14v-.14h.13v-.13h.13v-.27h.14v-.13h.13v-.13h.13v-.14h.14v-.13h.13v-.13h.13v-.14h.14v-.26h.13v-.14h.13v-.13h.14v-.13h.13v-.13h.13v-.14h.13v-.13h.14v-.27h.13v-.13h.13v-.13h.14v-.14h.13v-.13h.13v-.13h.14v-.14h.13v-.26h.13v-.14h.14v-.13h.13v-.13h.13v-.13h.14v-.14h.13v-.13h.13v-.27h.13v-.13h.14v-.13h.13v-.14h.13v-.13h.14v-.13h.13v-.14h.13v-.26h.14v-.14h.13v-.13h.13v-.13h.14v-.13h.13v-.14h.27v.14h.13v.13h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.13h.13v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.13h.13v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.13h.13v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13V43h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.13h.13v.14h.13v.13h.13v.13h.14v.14h.13V45h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.13v.13h.14V47h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.13h.13v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.13h.13v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.13h.13v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.13h.13v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.13h.13v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.13h.13v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.13h.13v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.13h.13v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.13h.13v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13V88h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.13h.13v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13V90h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.13h.13v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14V92h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.14h.13v.13h.13v.13h.14v.4h-.14v1.07h-.13v1.06h-.13v1.07h-.14v1.06h-.13v.8h-.13v.8h-.14v.66h-.13v.8h-.13v.67h-.14v.66h-.13v.67h-.13v.67h-.14v.53h-.13v.53h-.13v.67h-.14v.53h-.13v.53h-.13v.53h-.13v.54h-.14v.4h-.13v.53h-.13v.4h-.14v.53h-.13v.4h-.13v.53h-.14v.4h-.13v.53h-.13v.4h-.14v.4h-.13v.4h-.13v.4h-.14v.4h-.13v.4h-.13v.27h-.13v.4h-.14v.4h-.13v.4h-.13v.39h-.14v.27h-.13v.4h-.13v.27h-.14v.4h-.13v.4h-.13v.26h-.14v.4h-.13v.27h-.13v.4h-.14v.26h-.13v.4h-.13v.27h-.13v.27h-.14v.26h-.13v.4h-.13v.27h-.14v.26h-.13v.27h-.13v.27h-.14v.4h-.13v.26h-.13v.27h-.14v.26h-.13v.27h-.13v.27h-.14v.26h-.13v.27h-.13v.27h-.13v.26h-.14v.27h-.13v.26h-.13v.27h-.14v.27h-.13v.26h-.13v.27h-.14v.27h-.13v.26h-.13v.27h-.14v.26h-.13v.27h-.13v.13h-.14v.27h-.13v.27h-.13v.26h-.14v.14h-.13v.26h-.13v.27h-.13v.26h-.14v.14h-.13v.26h-.13v.27h-.14v.27h-.13v.13h-.13v.27h-.14v.26h-.13v.14h-.13v.26h-.14v.13h-.13v.27h-.13v.27h-.14v.13h-.13v.27h-.13v.13h-.13v.27h-.14v.13h-.13v.27h-.13v.26h-.14v.13h-.13v.27h-.13v.13h-.14v.27h-.13v.13h-.13v.27h-.14v.13h-.13v.27h-.13v.13h-.14v.14h-.13v.26h-.13v.14h-.13v.26h-.14v.13h-.13v.14h-.13v.26h-.14v.14h-.13v.26h-.13v.14h-.14v.26h-.13v.14h-.13v.13h-.14v.27h-.13v.13h-.13v.13h-.14v.27h-.13v.13h-.13v.13h-.13v.27h-.14v.13h-.13v.14h-.13v.13h-.14v.27h-.13v.13h-.13v.13h-.14v.14h-.13v.26h-.13v.13h-.14v.14h-.13v.26h-.13v.14h-.14v.13h-.13v.13h-.13v.27h-.14v.13h-.13v.14h-.13v.13h-.13v.13h-.14v.14h-.13v.26h-.13v.13h-.14v.14h-.13v.13h-.13v.13h-.14v.14h-.13v.13h-.13v.27h-.14v.13h-.13v.13h-.13v.14h-.14v.13h-.13v.13h-.13v.27h-.13v.13h-.14v.13h-.13v.14h-.13v.13h-.14v.13h-.13v.14h-.13v.13h-.14v.13h-.13v.14h-.13v.13h-.14v.13h-.13v.14h-.13v.13h-.14v.13h-.13v.14h-.13v.26h-.13v.14h-.14v.13h-.13v.13h-.13v.13h-.14v.14h-.13v.13h-.13v.13h-.14v.14h-.13v.13h-.13v.13h-.14v.14h-.13v.13h-.13v.13h-.14v.14h-.13v.13h-.13v.13h-.13v.14h-.27v.13h-.13v.13h-.14v.13h-.13v.14h-.13v.13h-.14v.13h-.13v.14h-.13v.13h-.14v.13h-.13v.14h-.13v.13h-.14v.13h-.13v.14h-.13v.13h-.14v.13h-.26v.14h-.13v.13h-.14v.13h-.13v.13h-.13v.14h-.14v.13h-.13v.13h-.27v.14h-.13v.13h-.13v.13h-.14v.14h-.13v.13h-.13v.13h-.14v.14h-.26v.13h-.13v.13h-.14v.14h-.13v.13h-.13v.13h-.27v.13h-.13v.14h-.14v.13h-.13v.13h-.27v.14h-.13v.13h-.13v.13h-.14v.14h-.26v.13h-.13v.13h-.14v.14h-.13v.13h-.27v.13h-.13v.14h-.13v.13h-.27v.13h-.13v.14h-.14v.13h-.13v.13h-.27v.13h-.13v.14h-.13v.13h-.27v.13h-.13v.14h-.27v.13h-.13v.13h-.13v.14h-.27v.13h-.13v.13h-.27v.14h-.13v.13h-.14v.13h-.26v.14h-.14v.13h-.26v.13h-.13v.13h-.27v.14H139v.13h-.14v.13h-.26v.14h-.14v.13h-.26v.13h-.27v.14h-.13v.13h-.27v.13h-.13v.14h-.27v.13H137v.13h-.27v.14h-.13v.13h-.27v.13h-.26v.13h-.14v.14h-.26v.13h-.14v.13h-.26v.14h-.13v.13h-.27v.13h-.27v.14h-.26v.13h-.14v.13h-.26v.14h-.27v.13h-.27v.13h-.13v.14h-.26v.13h-.27v.13h-.27v.13h-.13v.14h-.27v.13h-.26v.13h-.27v.14h-.27v.13h-.13v.13h-.26v.14h-.27v.13h-.27v.13h-.26v.14h-.27v.13h-.27v.13h-.26v.14h-.27v.13h-.27v.13h-.26v.14h-.27v.13h-.26v.13h-.27v.13h-.27v.14h-.26v.13h-.27v.13h-.27v.14h-.39v.13h-.27v.13h-.27v.14h-.26v.13h-.27v.13h-.4v.14h-.27v.13h-.26v.13h-.4v.14h-.27v.13h-.26v.13h-.4v.13h-.27v.14h-.4v.13h-.26v.13h-.4v.14h-.27v.13h-.4v.13h-.27v.14h-.4v.13h-.4v.13h-.26v.14h-.4v.13h-.4v.13h-.4v.14h-.4v.13h-.4v.13h-.4v.13h-.4v.14h-.4v.13h-.4v.13h-.4v.14h-.39v.13h-.54v.13h-.4v.14h-.53v.13h-.4v.13h-.53v.14h-.4v.13h-.53v.13h-.4v.14h-.67v.13h-.53v.13h-.53v.13h-.67v.14h-.53v.13h-.53v.13h-.67v.14h-.67v.13h-.66v.13h-.8v.14h-.67v.13h-.79v.13h-.67v.14h-.93v.13h-1.07v.13h-1.06v.14"
          id="prefix__c"
        />
        <Path
          d="M59.13 108.33c0-16.28 13.2-29.48 29.48-29.48s29.48 13.2 29.48 29.48-13.2 29.48-29.48 29.48-29.48-13.2-29.48-29.48zm29.48-41.15c-2.64 0-5.21.27-7.7.74 1.82-2.62 10.92-15.75 27.31-39.38H93.9L56.48 82.5c.04.03.07.05.07.05-5.68 7.06-9.09 16.02-9.09 25.78 0 22.73 18.42 41.15 41.15 41.15 22.72 0 41.15-18.42 41.15-41.15 0-22.73-18.43-41.15-41.15-41.15"
          id="prefix__e"
        />
        <Path
          d="M86.45 109.86c-2.04 0-3.98-1.21-4.8-3.21l-6.69-16.2c-1.09-2.66.17-5.7 2.82-6.79 2.66-1.09 5.7.17 6.79 2.82l6.69 16.2a5.203 5.203 0 01-4.81 7.18"
          id="prefix__f"
        />
        <LinearGradient
          id="prefix__b"
          gradientUnits="userSpaceOnUse"
          x1={89.02}
          y1={-0.22}
          x2={89.02}
          y2={178.16}
        >
          <Stop offset="0%" stopColor="#5564a0" />
          <Stop offset="42.496%" stopColor="#5564a0" />
          <Stop offset="100%" stopColor="#26275d" />
        </LinearGradient>
        <LinearGradient
          id="prefix__d"
          gradientUnits="userSpaceOnUse"
          x1={89.02}
          y1={-0.22}
          x2={89.02}
          y2={178.16}
        >
          <Stop offset="0%" stopColor="#2a3549" />
          <Stop offset="42.496%" stopColor="#2a3549" />
          <Stop offset="100%" stopColor="#1c2337" />
        </LinearGradient>
      </Defs>
      <Use xlinkHref="#prefix__a" fill="url(#prefix__b)" />
      <Use
        xlinkHref="#prefix__a"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#prefix__c" fill="url(#prefix__d)" />
      <Use
        xlinkHref="#prefix__c"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <G>
        <Use xlinkHref="#prefix__e" fill="#dfdfdd" />
        <Use
          xlinkHref="#prefix__e"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#prefix__f" fill="#dfdfdd" />
        <Use
          xlinkHref="#prefix__f"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
    </Svg>
  )
}

export default Logo;