import spaImg from '@/assets/spa.jpg';
import diningImg from '@/assets/dining.jpg';

const services = [
  {
    title: 'Serenity Spa',
    image: spaImg,
    desc: 'ผ่อนคลายกับสปาระดับพรีเมียม ด้วยทรีตเมนต์จากธรรมชาติ นวดแผนไทย อโรมาเธอราพี และทรีตเมนต์ใบหน้า',
    hours: 'เปิดให้บริการ 10:00 - 21:00',
    items: ['นวดแผนไทย — ฿800', 'อโรมาเธอราพี — ฿1,200', 'ทรีตเมนต์ใบหน้า — ฿1,500'],
  },
  {
    title: 'Valley Restaurant',
    image: diningImg,
    desc: 'รับประทานอาหารริมหุบเขา กับเมนูอาหารไทยและนานาชาติ ใช้วัตถุดิบสดจากฟาร์มท้องถิ่น',
    hours: 'เปิดให้บริการ 07:00 - 22:00',
    items: ['อาหารเช้า — ฿350', 'อาหารกลางวัน — ฿450', 'อาหารเย็น — ฿650'],
  },
];

const ServicesPage = () => {
  return (
    <div className="px-4 pt-6">
      <h1 className="text-2xl font-heading font-bold text-foreground">บริการ</h1>
      <p className="mt-1 text-sm text-muted-foreground">สปาและร้านอาหาร</p>

      <div className="mt-5 space-y-6">
        {services.map((s) => (
          <div key={s.title} className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <img src={s.image} alt={s.title} className="h-44 w-full object-cover" loading="lazy" />
            <div className="p-4">
              <h2 className="text-lg font-heading font-semibold text-foreground">{s.title}</h2>
              <p className="mt-1 text-xs text-primary font-medium">{s.hours}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <ul className="mt-3 space-y-1">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
