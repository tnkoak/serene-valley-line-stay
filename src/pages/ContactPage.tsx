import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="px-4 pt-6">
      <h1 className="text-2xl font-heading font-bold text-foreground">ติดต่อเรา</h1>
      <p className="mt-1 text-sm text-muted-foreground">เราพร้อมให้บริการคุณ</p>

      <div className="mt-5 space-y-4">
        <div className="rounded-xl border border-border bg-card p-4 shadow-sm space-y-4">
          {[
            { icon: MapPin, label: 'ที่อยู่', value: '123 กมลา อำเภอกะทู้ ภูเก็ต' },
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
            src="https://www.google.com/maps?q=7.9638611,98.2820278&z=18&output=embed"
            className="h-[300px] w-full"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
