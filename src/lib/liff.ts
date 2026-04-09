import liff from '@line/liff';

const LIFF_ID = '2009753618-cwZ9hnYy';

let isInitialized = false;

export const initLiff = async () => {
  if (isInitialized) return;
  try {
    await liff.init({ liffId: LIFF_ID });
    isInitialized = true;
    console.log('LIFF initialized successfully');
  } catch (error) {
    console.error('LIFF initialization failed:', error);
  }
};

export const sendBookingMessage = async () => {
  try {
    // เพิ่มบรรทัดนี้ เพื่อเช็คชัวร์ๆ ว่า LIFF โหลดเสร็จ 100% ก่อนส่งข้อความ
    await liff.ready;

    if (!liff.isInClient()) {
      alert('Booking Confirmed! (เปิดบนเบราว์เซอร์ปกติ)');
      return;
    }

    await liff.sendMessages([
      {
        type: 'text',
        text: 'ยืนยันการจอง',
      },
    ]);
    liff.closeWindow();
  } catch (error: any) {
    console.error('Failed to send message:', error);
    // เปลี่ยน Alert ให้บอกสาเหตุที่แท้จริง
    alert('เกิดข้อผิดพลาด: ' + (error.message || JSON.stringify(error)));
  }
};

export { liff };