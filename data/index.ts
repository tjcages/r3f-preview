import TheButton from "@/buttons/TheButton";
import Hover from "@/buttons/Hover";
import Digital from "@/buttons/Digital";
import Windows98 from "@/buttons/Windows98";
import NyanCat from "@/buttons/NyanCat";
import Notes from "@/buttons/Notes";
// import VHS from "@/buttons/VHS";
import WordArt from "@/buttons/WordArt";
import MusicPlayer from "@/buttons/MusicPlayer";
import Retrowave from "@/buttons/Retrowave";
import Paint from "@/buttons/Paint";
import DVD from "@/buttons/DVD";

import TheButtonStyles from "@/buttons/TheButton/style.module.scss";
import HoverStyles from "@/buttons/Hover/style.module.scss";
import DigitalStyles from "@/buttons/Digital/style.module.scss";
import Windows98Styles from "@/buttons/Windows98/style.module.scss";
import NyanCatStyles from "@/buttons/NyanCat/style.module.scss";
import NotesStyles from "@/buttons/Notes/style.module.scss";
// import VHSStyles from "@/buttons/VHS/style.module.scss";
import WordArtStyles from "@/buttons/WordArt/style.module.scss";
import MusicPlayerStyles from "@/buttons/MusicPlayer/style.module.scss";
import RetrowaveStyles from "@/buttons/Retrowave/style.module.scss";
import PaintStyles from "@/buttons/Paint/style.module.scss";
import DVDStyles from "@/buttons/DVD/style.module.scss";

interface Props {
  live?: boolean;
  id: string;
  name: string;
  description?: string;
  cta: string;
  href?: string;
  Scene: React.FC<any>;
  background: string;
  color: string;
  style?: any;
  indexCode?: string;
  styleCode?: string;
}

const _ = [
  {
    live: true,
    id: "buy_btn_1N0oN4JWmqHDfKfmp7X3jeRp",
    name: "The buy button",
    cta: "Buy",
    Scene: TheButton,
    color: "white",
    background: "#635BFF",
    style: TheButtonStyles,
  },
  {
    live: true,
    id: "buy_btn_1N0sCTJWmqHDfKfmIMQI0Ahx",
    name: "Dark mode button",
    cta: "Buy",
    Scene: Digital,
    color: "#eceff2",
    background: "transparent",
    style: DigitalStyles,
  },
  {
    live: true,
    id: "buy_btn_1N0sDMJWmqHDfKfmW7KvBgHC",
    name: "Colorful button",
    cta: "Buy",
    Scene: Hover,
    color: "white",
    background: "#CA75E6",
    style: HoverStyles,
  },
  {
    live: true,
    id: "buy_btn_1N0ta2JWmqHDfKfmu7Aw4Sub",
    name: "Windows 95 button",
    cta: "Buy",
    Scene: Windows98,
    color: "black",
    background: "#c0c7c8",
    style: Windows98Styles,
    indexCode: `<body>
    <!-- Paste your embed code script here. -->
    <script
      async
      src="https://js.stripe.com/v3/buy-button.js">
    </script>
    <stripe-buy-button
      buy-button-id="{{BUY_BUTTON_ID}}"
      publishable-key="pk_live_your_publishable_key"
    >
    </stripe-buy-button>
  </body>  
  `,
  },
  {
    live: true,
    id: "buy_btn_1N0qEIJWmqHDfKfmrqYKPijF",
    name: "Paint button",
    cta: "Buy",
    Scene: Paint,
    color: "black",
    background: "white",
    style: PaintStyles,
    indexCode: `<body>
    <!-- Paste your embed code script here. -->
    <script
      async
      src="https://js.stripe.com/v3/buy-button.js">
    </script>
    <stripe-buy-button
      buy-button-id="{{BUY_BUTTON_ID}}"
      publishable-key="pk_live_your_publishable_key"
    >
    </stripe-buy-button>
  </body>  
  `,
  },
  {
    live: true,
    id: "buy_btn_1N0qPFJWmqHDfKfmKilTPDaH",
    name: "Notes button",
    cta: "Buy",
    Scene: Notes,
    color: "black",
    background: "#f8f79a",
    style: NotesStyles,
    indexCode: `<body>
    <!-- Paste your embed code script here. -->
    <script
      async
      src="https://js.stripe.com/v3/buy-button.js">
    </script>
    <stripe-buy-button
      buy-button-id="{{BUY_BUTTON_ID}}"
      publishable-key="pk_live_your_publishable_key"
    >
    </stripe-buy-button>
  </body>  
  `,
  },
  {
    live: true,
    id: "buy_btn_1N0uIpJWmqHDfKfm7ZYRTRtk",
    name: "Word art button",
    cta: "Buy",
    Scene: WordArt,
    color: "black",
    background: "white",
    style: WordArtStyles,
    indexCode: `<body>
    <!-- Paste your embed code script here. -->
    <script
      async
      src="https://js.stripe.com/v3/buy-button.js">
    </script>
    <stripe-buy-button
      buy-button-id="{{BUY_BUTTON_ID}}"
      publishable-key="pk_live_your_publishable_key"
    >
    </stripe-buy-button>
  </body>  
  `,
  },
  {
    live: false,
    id: "buy_btn_1N0qT8JWmqHDfKfmh3bo3ZxR",
    name: "Music player button",
    cta: "Play",
    href: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
    Scene: MusicPlayer,
    color: "black",
    background: "#ffcdfa",
    style: MusicPlayerStyles,
    indexCode: `<body>
    <!-- Paste your embed code script here. -->
    <script
      async
      src="https://js.stripe.com/v3/buy-button.js">
    </script>
    <stripe-buy-button
      buy-button-id="{{BUY_BUTTON_ID}}"
      publishable-key="pk_live_your_publishable_key"
    >
    </stripe-buy-button>
  </body>  
  `,
  },
  // {
  //   live: true,
  //   id: "buy_btn_1N0tVkJWmqHDfKfmKiy180cH",
  //   name: "VHS button",
  //   cta: "Buy",
  //   Scene: VHS,
  //   color: "black",
  //   background: "white",
  //   style: VHSStyles,
  //   indexCode: `<body>
  //   <!-- Paste your embed code script here. -->
  //   <script
  //     async
  //     src="https://js.stripe.com/v3/buy-button.js">
  //   </script>
  //   <stripe-buy-button
  //     buy-button-id="{{BUY_BUTTON_ID}}"
  //     publishable-key="pk_live_your_publishable_key"
  //   >
  //   </stripe-buy-button>
  // </body>
  // `,
  // },
  {
    live: true,
    id: "buy_btn_1N0qY5JWmqHDfKfm9W7Qh28I",
    name: "Retrowave button",
    cta: "Buy",
    Scene: Retrowave,
    color: "white",
    background: "#85CAEA",
    style: RetrowaveStyles,
    indexCode: `<body>
    <!-- Paste your embed code script here. -->
    <script
      async
      src="https://js.stripe.com/v3/buy-button.js">
    </script>
    <stripe-buy-button
      buy-button-id="{{BUY_BUTTON_ID}}"
      publishable-key="pk_live_your_publishable_key"
    >
    </stripe-buy-button>
  </body>  
  `,
  },
  {
    live: true,
    id: "buy_btn_1N0qUMJWmqHDfKfm7zWFR71h",
    name: "Nyan cat button",
    cta: "Buy",
    Scene: NyanCat,
    color: "black",
    background: "#fd99fc",
    style: NyanCatStyles,
    indexCode: `<body>
    <!-- Paste your embed code script here. -->
    <script
      async
      src="https://js.stripe.com/v3/buy-button.js">
    </script>
    <stripe-buy-button
      buy-button-id="{{BUY_BUTTON_ID}}"
      publishable-key="pk_live_your_publishable_key"
    >
    </stripe-buy-button>
  </body>  
  `,
  },
  {
    live: true,
    id: "buy_btn_1N0oN4JWmqHDfKfmp7X3jeRp",
    name: "DVD button",
    cta: "Buy",
    Scene: DVD,
    color: "black",
    background: "white",
    style: DVDStyles,
    indexCode: `<body>
    <!-- Paste your embed code script here. -->
    <script
      async
      src="https://js.stripe.com/v3/buy-button.js">
    </script>
    <stripe-buy-button
      buy-button-id="{{BUY_BUTTON_ID}}"
      publishable-key="pk_live_your_publishable_key"
    >
    </stripe-buy-button>
  </body>  
  `,
  },
] as Props[];

export default _;
export type { Props };
