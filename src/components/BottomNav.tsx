import { Link, useLocation } from 'react-router-dom';
import { Home, BedDouble, Tag, ConciergeBell, MapPin } from 'lucide-react';

const navItems = [
  { path: '/', icon: Home, label: 'หน้าแรก' },
  { path: '/rooms', icon: BedDouble, label: 'ห้องพัก' },
  { path: '/promotions', icon: Tag, label: 'โปรโมชั่น' },
  { path: '/services', icon: ConciergeBell, label: 'บริการ' },
  { path: '/contact', icon: MapPin, label: 'ติดต่อ' },
];

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-md safe-area-bottom">
      <div className="flex items-center justify-around py-2">
        {navItems.map(({ path, icon: Icon, label }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={`flex flex-col items-center gap-0.5 px-3 py-1 text-xs transition-colors ${
                isActive
                  ? 'text-primary font-medium'
                  : 'text-muted-foreground'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
