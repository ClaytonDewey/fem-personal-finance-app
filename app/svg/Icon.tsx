import {
  AuthenticationSvg,
  IconBillDue,
  IconCaretDown,
  IconCaretLeft,
  IconCaretRight,
  IconClose,
  IconEllipsis,
  IconEye,
  IconEyeHide,
  IconFilter,
  IconHome,
  IconMinimize,
  IconNavBudgets,
  IconNavPots,
  IconNavRecurring,
  IconNavTransactions,
  IconPot,
  IconRecurring,
  IconSearch,
  IconSelected,
  IconSort,
  Logo,
  LogoSmall,
} from '.';

const Icon = ({
  name,
}: {
  name:
    | 'authentication'
    | 'bill-due'
    | 'caret-down'
    | 'caret-left'
    | 'caret-right'
    | 'close'
    | 'ellipsis'
    | 'eye'
    | 'eye-hide'
    | 'filter'
    | 'home'
    | 'logo'
    | 'logo-small'
    | 'minimize'
    | 'nav-budgets'
    | 'nav-pots'
    | 'nav-recurring'
    | 'nav-transactions'
    | 'pot'
    | 'recurring'
    | 'search'
    | 'selected'
    | 'sort';
}) => {
  switch (name) {
    case 'authentication':
      return <AuthenticationSvg />;
    case 'bill-due':
      return <IconBillDue />;
    case 'caret-down':
      return <IconCaretDown />;
    case 'caret-left':
      return <IconCaretLeft />;
    case 'caret-right':
      return <IconCaretRight />;
    case 'close':
      return <IconClose />;
    case 'ellipsis':
      return <IconEllipsis />;
    case 'eye':
      return <IconEye />;
    case 'eye-hide':
      return <IconEyeHide />;
    case 'filter':
      return <IconFilter />;
    case 'home':
      return <IconHome />;
    case 'logo':
      return <Logo />;
    case 'logo-small':
      return <LogoSmall />;
    case 'minimize':
      return <IconMinimize />;
    case 'nav-budgets':
      return <IconNavBudgets />;
    case 'nav-pots':
      return <IconNavPots />;
    case 'nav-recurring':
      return <IconNavRecurring />;
    case 'nav-transactions':
      return <IconNavTransactions />;
    case 'pot':
      return <IconPot />;
    case 'recurring':
      return <IconRecurring />;
    case 'search':
      return <IconSearch />;
    case 'selected':
      return <IconSelected />;
    case 'sort':
      return <IconSort />;
    default:
      return <Logo />;
  }
};
export default Icon;
