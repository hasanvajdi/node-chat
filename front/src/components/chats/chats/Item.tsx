//  packages
import { AvatarGenerator } from "random-avatar-generator";

//  styles
import chatItemStyles from "./styles.module.scss";

function Item(props: any) {
  const { data } = props;
  const generator = new AvatarGenerator();
  console.log("aaaa : ");

  return (
    <div className={chatItemStyles.chatItemContainer}>
      <div className={chatItemStyles.chatItemAvatar}>
        <img src={generator.generateRandomAvatar()} alt="avatar" />
      </div>
      <span className={chatItemStyles.chatTitle}>{data.user2}</span>
    </div>
  );
}

export default Item;
