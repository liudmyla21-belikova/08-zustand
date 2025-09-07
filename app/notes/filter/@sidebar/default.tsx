import Link from "next/link";
import css from "./SideBarNotes.module.css";

const TAGS = ["All", "Work", "Personal", "Meeting", "Shopping", "Todo"];

export default function SidebarPage() {
  return (
    <ul className={css.menuList}>
      {TAGS.map((tag) => {
        const href = `/notes/filter/${tag}`;
        return (
          <li key={tag} className={css.menuItem}>
            <Link href={href} className={css.menuLink}>
              {tag}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
