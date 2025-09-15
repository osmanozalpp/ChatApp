

import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../zustand/useConversation';
import { extractTime } from "../../utils/extractTime"; // Dosya uzantısının doğru olduğundan emin olun
 // Dosya yolunun doğru olduğunu kontrol edin

const Message = ({ message }) => {
  // message objesinin doğru geldiğini kontrol etmek için hata kontrolü ekleyelim
  if (!message || !message.senderId || !message.createdAt || !message.message) {
    console.error("Geçersiz mesaj verisi:", message);
    return null; // Eksik veya hatalı veri durumunda render etmeyebiliriz
  }

  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation(); // Typo düzeltildi

  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);  // extractTime fonksiyonu burada kullanılıyor
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic;
  const bubbleBgColor = fromMe ? 'bg-blue-500' : "";  // Gönderilen mesaja göre arka plan rengi

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="User profile"
            src={profilePic}  // Kullanıcı profil resmi
          />
        </div>
      </div>
*/ /*
      <div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>
        {message.message}  {/* Mesa*/}
        </div>

        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
          {formattedTime}  {/* Mesajın oluşturulma zamanı*/ }
        </div>
      </div>
    );
  };
  
  export default Message;
  


/*import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../zustand/useConversation';
import { extractTime } from "../../utils/extractTime"; // Dosya uzantısının doğru olduğundan emin olun
 // Dosya yolunun doğru olduğunu kontrol edin

const Message = ({ message }) => {
  // message objesinin doğru geldiğini kontrol etmek için hata kontrolü ekleyelim
  if (!message || !message.senderId || !message.createdAt || !message.message) {
    console.error("Geçersiz mesaj verisi:", message);
    return null; // Eksik veya hatalı veri durumunda render etmeyebiliriz
  }

  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation(); // Typo düzeltildi

  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);  // extractTime fonksiyonu burada kullanılıyor
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic;
  const bubbleBgColor = fromMe ? 'bg-blue-500' : "";  // Gönderilen mesaja göre arka plan rengi

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="User profile"
            src={profilePic}  // Kullanıcı profil resmi
          />
        </div>
      </div>
*/ /*
      <div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>
        {message.message}  {/* Mesa}
        </div>

        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
          {formattedTime}  {/* Mesajın oluşturulma zamanı }
        </div>
      </div>
    );
  };
  
  export default Message;
  */