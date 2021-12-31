window.onload = function _win_onload() {
  let field_key = document.getElementById('field_key');
  let field_plain = document.getElementById('field_plain');
  let field_cipher = document.getElementById('field_cipher');
  let btn_encrypt = document.getElementById('btn_encrypt');
  let btn_decrypt = document.getElementById('btn_decrypt');


  function Encryptor(keyword, text) {
    this.keyword = keyword;
    this.text = text;

    let extra_char_list = [' ', ',', '.', '?', '!', ':', '~'];
    this.char_list = [];
      for(let c = 'a'.charCodeAt(0); c <= 'z'.charCodeAt(0); c++) {
        this.char_list.push(String.fromCodePoint(c));
      }
      for(let c = 'A'.charCodeAt(0); c <= 'Z'.charCodeAt(0); c++) {
        this.char_list.push(String.fromCodePoint(c));
      }
      for(let i = 0; i < 10; i++) {
        this.char_list.push(i.toString());
      }
      for(let i = 0; i < extra_char_list.length; i++) {
        this.char_list.push(extra_char_list[i]);
      }

    this.get_index = function _get_index(k) {
      // Consider Time Cost, use matching rather than search
      let k_code = k.charCodeAt(0);
      if('a'.charCodeAt(0) <= k_code && k_code <= 'z'.charCodeAt(0)) {
        return k_code - 'a'.charCodeAt(0);
      } else if ('A'.charCodeAt(0) <= k_code && k_code <= 'Z'.charCodeAt(0)) {
        return 26 + k_code - 'A'.charCodeAt(0);
      } else if ('0'.charCodeAt(0) <= k_code && k_code <= '9'.charCodeAt(0)) {
        return 26 + 26 + k_code - '0'.charCodeAt(0);
      } else {
        for(let i = 0; i < extra_char_list.length; i++) {
          if(k === extra_char_list[i]) {
            return 26 + 26 + 10 + i;
          }
        }
      }

      return null; // Not Found
    }
    
    this.get_encryption = function (is_encrypt) {
      let result = "";
      for(let i = 0; i < this.text.length; i++) {
        let n = this.get_index(this.keyword[i % this.keyword.length]);
        if(n === null) n = 0;
        if(!is_encrypt) n *= -1;

        let curr_text_idx = this.get_index(this.text[i]);
        if(curr_text_idx === null) result += this.text[i];
        else {
          let shifted_idx = (curr_text_idx - n + this.char_list.length) % this.char_list.length;
          result += this.char_list[shifted_idx];
        }
      }

      return result;
    }
  }

  btn_encrypt.onclick = function _btn_encrypt_onclick() {
    let keyword = field_key.value;
    let plain = field_plain.value;
    
    let some_cipher = new Encryptor(keyword, plain);
    field_cipher.value = some_cipher.get_encryption(true);
  }

  btn_decrypt.onclick = function _btn_decrypt_onclick() {
    let keyword = field_key.value;
    let cipher = field_cipher.value;
    
    let some_cipher = new Encryptor(keyword, cipher);
    field_plain.value = some_cipher.get_encryption(false);
  }

}