import { Tag, Sparkles, Gift } from 'lucide-react';

const promos = [
  {
    icon: Tag,
    title: 'Early Bird ลด 15%',
    desc: 'จองล่วงหน้า 30 วัน รับส่วนลด 15% สำหรับทุกประเภทห้องพัก',
    badge: 'ยอดนิยม',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Sparkles,
    title: 'Free Spa Coupon',
    desc: 'เข้าพัก 2 คืนขึ้นไป รับคูปองสปาฟรี 1 ชั่วโมง',
    badge: 'แนะนำ',
    color: 'bg-accent/30 text-accent-foreground',
  },
  {
    icon: Gift,
    title: 'Stay 3 Pay 2',
    desc: 'เข้าพัก 3 คืน จ่ายเพียง 2 คืน เฉพาะห้อง Deluxe Pool Villa',
    badge: 'จำกัดเวลา',
    color: 'bg-destructive/10 text-destructive',
  },
];

const PromotionsPage = () => {
  return (
    <div className="px-4 pt-6">
      <h1 className="text-2xl font-heading font-bold text-foreground">โปรโมชั่น</h1>
      <p className="mt-1 text-sm text-muted-foreground">ข้อเสนอพิเศษสำหรับคุณ</p>

      <div className="mt-5 space-y-4">
        {promos.map((p) => (
          <div key={p.title} className="rounded-xl border border-border bg-card p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <p.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h2 className="font-semibold text-foreground">{p.title}</h2>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${p.color}`}>
                    {p.badge}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromotionsPage;
