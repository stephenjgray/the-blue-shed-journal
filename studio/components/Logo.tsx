import { studioConfig } from "../config";

const en_Logo = `https://l3pden50fc.ufs.sh/f/qVxhWi9olDGtbhbcXCAgqS7DnVdjakXxi8FyRKutmBTf5bHh`


export default function Logo() {
  return (
    <img 
    src={en_Logo}
      alt="Sane Kit Logo" 
        style={{ width: '20px', height: 'auto', mixBlendMode: 'difference'}}
    />
  );
}