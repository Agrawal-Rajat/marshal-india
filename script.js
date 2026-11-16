/**
 * Marshal Medico - Coming Soon Interactive Script
 */

document.addEventListener('DOMContentLoaded', () => {
  initVCardDownload();
});

function initVCardDownload() {
  const downloadBtn = document.getElementById('downloadVcardBtn');
  if (!downloadBtn) return;

  const vCardData = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Khalsa;Kulveer;Singh;;',
    'FN:Kulveer Singh Khalsa',
    'ORG:Marshal Medico',
    'TITLE:Healthcare Distribution',
    'TEL;TYPE=WORK,VOICE:07314075310',
    'TEL;TYPE=CELL,VOICE;VALUE=uri:tel:+919907045677',
    'EMAIL;TYPE=PREF,INTERNET:marshalmedico@gmail.com',
    'ADR;TYPE=WORK,POSTAL,PARCEL:;;40-B, Harmony Plaza, 1-Agrawal Nagar, Sapna Sangeeta Road;Indore;Madhya Pradesh;452001;India',
    'URL:https://www.marshal-india.com',
    'NOTE:Marshal Medico, Indore',
    'END:VCARD'
  ].join('\r\n');

  downloadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const tempLink = document.createElement('a');
    tempLink.href = url;
    tempLink.setAttribute('download', 'Marshal_Medico_Kulveer_Singh.vcf');
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
    URL.revokeObjectURL(url);

    showToast('Contact saved! Open the downloaded .vcf file to add to phone contacts.');
  });
}

function showToast(message) {
  let toast = document.getElementById('siteToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'siteToast';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 6L9 17l-5-5"/>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
