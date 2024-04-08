import { MenuLink as MenuLinkType } from "@/types";
import {motion} from 'framer-motion'
import Link from "next/link";

type MenuLinkProps = {
    link: MenuLinkType;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
  };

  const linkVariants = {
    initial: {
      y: 100,
      opacity: 0,
      scaleY: 0.5,
    },
    animate: {
      y: 0,
      opacity: 1,
      scaleY: 1,
      transition: {
        duration: 1,
      },
    },
  };
  
  
 export default function MenuLink({ link, setActive }: MenuLinkProps) {
    return (
      <motion.li
        variants={linkVariants}
        className="w-fit"
        key={link.href}
        style={{ zIndex: 102, mixBlendMode: "difference" }}
      >
        <Link href={link.href} onClick={() => setActive(false)}>
          <span>{link.text}</span>
        </Link>
      </motion.li>
    );
  }
  