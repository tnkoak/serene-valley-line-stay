import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import roomSuperior from '@/assets/room-superior.jpg';
import roomDeluxe from '@/assets/room-deluxe.jpg';

const rooms = [
  {
    id: 'superior',
    name: 'Superior Nature View',
    price: 1500,
    image: roomSuperior,
    desc: 'ห้องพักกว้างขวางพร้อมวิวธรรมชาติ เตียงคิงไซส์ ระเบียงส่วนตัว',
    features: ['วิวภูเขา', 'ระเบียงส่วนตัว', 'อ่างอาบน้ำ'],
  },
  {
    id: 'deluxe',
    name: 'Deluxe Pool Villa',
    price: 3200,
    image: roomDeluxe,
    desc: 'วิลล่าส่วนตัวพร้อมสระว่ายน้ำ ล้อมรอบด้วยสวนเขตร้อน',
    features: ['สระว่ายน้ำส่วนตัว', 'ห้องนั่งเล่น', 'มินิบาร์'],
  },
];

const RoomsPage = () => {
  return (
    <div className="px-4 pt-6">
      <h1 className="text-2xl font-heading font-bold text-foreground">ห้องพัก</h1>
      <p className="mt-1 text-sm text-muted-foreground">เลือกห้องพักที่เหมาะกับคุณ</p>

      <div className="mt-5 space-y-5">
        {rooms.map((room) => (
          <div key={room.id} className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <img src={room.image} alt={room.name} className="h-48 w-full object-cover" loading="lazy" />
            <div className="p-4">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-heading font-semibold text-foreground">{room.name}</h2>
                <span className="text-primary font-semibold text-sm whitespace-nowrap">
                  ฿{room.price.toLocaleString()}<span className="text-xs text-muted-foreground font-normal">/คืน</span>
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{room.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {room.features.map((f) => (
                  <span key={f} className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary font-medium">
                    {f}
                  </span>
                ))}
              </div>
              <Link to="/booking" className="mt-4 block">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  จองเลย
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomsPage;
