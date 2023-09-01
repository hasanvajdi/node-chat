import { useState } from "react";

//  packages
import { AvatarGenerator } from "random-avatar-generator";
import { Skeleton } from "antd";

//  styles
import chatItemStyles from "./styles.module.scss";

function Item(props: any) {
  //  variables
  const { data } = props;
  const generator = new AvatarGenerator();

  //  states
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  return (
    <div className={chatItemStyles.chatItemContainer}>
      <div className={chatItemStyles.chatItemAvatar}>
        <img
          src={generator.generateRandomAvatar()}
          alt="avatar"
          onLoad={() => setImageIsLoaded(true)}
        />
        {!imageIsLoaded && (
          <Skeleton.Avatar
            active
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
            }}
          />
        )}
      </div>
      <span className={chatItemStyles.chatTitle}>{data.user2}</span>
    </div>
  );
}

export default Item;
