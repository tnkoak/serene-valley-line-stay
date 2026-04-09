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
  if (!liff.isInClient()) {
    alert('Booking Confirmed!');
    return;
  }

  try {
    await liff.sendMessages([
      {
        type: 'text',
        text: 'ยืนยันการจอง',
      },
    ]);
    liff.closeWindow();
  } catch (error) {
    console.error('Failed to send message:', error);
    alert('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง');
  }
};

export { liff };
