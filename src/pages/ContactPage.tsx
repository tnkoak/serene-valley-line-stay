import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="px-4 pt-6">
      <h1 className="text-2xl font-heading font-bold text-foreground">ติดต่อเรา</h1>
      <p className="mt-1 text-sm text-muted-foreground">เราพร้อมให้บริการคุณ</p>

      <div className="mt-5 space-y-4">
        <div className="rounded-xl border border-border bg-card p-4 shadow-sm space-y-4">
          {[
            { icon: MapPin, label: 'ที่อยู่', value: '123 หมู่ 5 ต.หุบเขา อ.เมือง จ.เชียงใหม่ 50000' },
            { icon: Phone, label: 'โทรศัพท์', value: '053-123-456' },
            { icon: Mail, label: 'อีเมล', value: 'info@serenevalley.com' },
            { icon: Clock, label: 'เวลาทำการ', value: 'เปิดให้บริการ 24 ชั่วโมง' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className="text-sm font-medium text-foreground">{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div className="overflow-hidden rounded-xl border border-border">
          <iframe
            title="Serene Valley Resort Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.123!2d98.9812!3d18.7883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDQ3JzE4LjAiTiA5OMKwNTgnNTIuMyJF!5e0!3m2!1sth!2sth!4v1"
            className="h-48 w-full"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
