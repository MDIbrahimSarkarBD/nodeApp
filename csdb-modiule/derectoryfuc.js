const fs = require('fs');
// আপনার পূর্বের কোড থেকে অনুলিপি করা ফাংশন
function listDirectoryItemsSync(directoryPath) {
    try {
      const dir = fs.opendirSync(directoryPath);
      const items = [];
      let dirent;
      while ((dirent = dir.readSync()) !== null) {
        items.push(dirent.name);
      }
      dir.closeSync();
      return items;
    } catch (error) {
      console.error('ডিরেক্টরি তালিকা প্রাপ্ত করা যায়নি:', error);
      throw error;
    }
  }
  
  // নিচের কোড লাইন গুলি এই ফাংশনটি ব্যবহার করা জন্য
//   const directoryPath = '../'; // আপনার ইচ্ছামত ডিরেক্টরি পাথ
//   const items = listDirectoryItemsSync(directoryPath);
//   console.log(items);
  
module.exports = {listDirectoryItemsSync};