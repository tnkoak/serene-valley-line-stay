import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { th } from 'date-fns/locale';
import { CalendarIcon, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { initLiff, sendBookingMessage } from '@/lib/liff';

const roomTypes = [
  { value: 'superior', label: 'Superior Nature View — ฿1,500/คืน' },
  { value: 'deluxe', label: 'Deluxe Pool Villa — ฿3,200/คืน' },
];

const guestOptions = ['1', '2', '3', '4'];

const BookingPage = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [roomType, setRoomType] = useState('');
  const [guests, setGuests] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    initLiff();
  }, []);

  const isValid = checkIn && checkOut && roomType && guests;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    setIsSubmitting(true);
    try {
      await sendBookingMessage();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-4 pt-6">
      <h1 className="text-2xl font-heading font-bold text-foreground">จองห้องพัก</h1>
      <p className="mt-1 text-sm text-muted-foreground">กรอกข้อมูลเพื่อจองห้องพัก</p>

      <form onSubmit={handleSubmit} className="mt-5 space-y-5">
        {/* Check-in */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-foreground">วันเช็คอิน</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn('w-full justify-start text-left font-normal', !checkIn && 'text-muted-foreground')}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkIn ? format(checkIn, 'PPP', { locale: th }) : 'เลือกวันเช็คอิน'}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkIn}
                onSelect={setCheckIn}
                disabled={(d) => d < new Date()}
                initialFocus
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Check-out */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-foreground">วันเช็คเอาท์</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn('w-full justify-start text-left font-normal', !checkOut && 'text-muted-foreground')}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkOut ? format(checkOut, 'PPP', { locale: th }) : 'เลือกวันเช็คเอาท์'}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkOut}
                onSelect={setCheckOut}
                disabled={(d) => d < (checkIn || new Date())}
                initialFocus
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Room Type */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-foreground">ประเภทห้องพัก</Label>
          <Select value={roomType} onValueChange={setRoomType}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="เลือกประเภทห้องพัก" />
            </SelectTrigger>
            <SelectContent>
              {roomTypes.map((r) => (
                <SelectItem key={r.value} value={r.value}>{r.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Guests */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-foreground">จำนวนผู้เข้าพัก</Label>
          <Select value={guests} onValueChange={setGuests}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="เลือกจำนวนผู้เข้าพัก" />
            </SelectTrigger>
            <SelectContent>
              {guestOptions.map((g) => (
                <SelectItem key={g} value={g}>{g} ท่าน</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          type="submit"
          disabled={!isValid || isSubmitting}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base font-semibold"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              กำลังดำเนินการ...
            </>
          ) : (
            'ยืนยันการจอง'
          )}
        </Button>
      </form>
    </div>
  );
};

export default BookingPage;
