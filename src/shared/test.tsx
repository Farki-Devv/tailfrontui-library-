import { Avatar, AvatarFallback, AvatarImage } from '../components/avatar';
function Test() {
  return (
    <Avatar>
      <AvatarImage
        src="https://avatars.githubusercontent.com/u/173272923?s=200&v=4"
        alt="@tailfront"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

export default Test;
