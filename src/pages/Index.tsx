import { Link } from 'react-router-dom';
import { BedDouble, Tag, ConciergeBell, MapPin, CalendarCheck, Leaf } from 'lucide-react';
import heroImg from '@/assets/hero-resort.jpg';

const quickLinks = [
  { path: '/rooms', icon: BedDouble, label: 'ห้องพัก', desc: 'ดูห้องพักทั้งหมด' },
  { path: '/booking', icon: CalendarCheck, label: 'จองห้องพัก', desc: 'จองออนไลน์' },
  { path: '/promotions', icon: Tag, label: 'โปรโมชั่น', desc: 'ข้อเสนอพิเศษ' },
  { path: '/services', icon: ConciergeBell, label: 'บริการ', desc: 'สปา & อาหาร' },
  { path: '/contact', icon: MapPin, label: 'ติดต่อเรา', desc: 'แผนที่ & เบอร์โทร' },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <div className="relative h-72 overflow-hidden">
        <img src={heroImg} alt="Serene Valley Resort" className="h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <Leaf className="h-8 w-8 text-nature-200 mb-2" />
          <h1 className="text-3xl font-bold text-primary-foreground font-heading">Serene Valley Resort</h1>
          <p className="mt-2 text-sm text-nature-200 font-body">สัมผัสความสงบท่ามกลางธรรมชาติ</p>
        </div>
      </div>

      {/* Quick Links */}
      <div className="px-4 -mt-6 relative z-10">
        <div className="grid grid-cols-2 gap-3">
          {quickLinks.map(({ path, icon: Icon, label, desc }) => (
            <Link
              key={path}
              to={path}
              className="flex items-start gap-3 rounded-xl bg-card p-4 shadow-sm border border-border transition-all active:scale-[0.98]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-sm text-foreground">{label}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Welcome */}
      <div className="px-4 mt-6">
        <div className="rounded-xl bg-primary/5 border border-primary/10 p-5">
          <h2 className="text-lg font-heading font-semibold text-foreground">ยินดีต้อนรับ</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Serene Valley Resort รีสอร์ทหรูท่ามกลางหุบเขา ล้อมรอบด้วยธรรมชาติอันงดงาม
            พร้อมบริการสปาระดับพรีเมียมและร้านอาหารริมหุบเขา
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
