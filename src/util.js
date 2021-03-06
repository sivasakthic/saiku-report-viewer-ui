/**
 *   Copyright 2017 OSBI Ltd
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

const util = {
  BLANK_BASE64_PDF: 'data:application/pdf;base64,JVBERi0xLjQgCjEgMCBvYmoKPDwKL1BhZ2VzIDIgMCBSCi9UeXBlIC9DYXRhbG9nCj4+CmVuZG9iagoyIDAgb2JqCjw8Ci9UeXBlIC9QYWdlcwovS2lkcyBbIDMgMCBSIF0KL0NvdW50IDEKPj4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovUmVzb3VyY2VzIDw8Ci9YT2JqZWN0IDw8IC9JbTAgOCAwIFIgPj4KL1Byb2NTZXQgNiAwIFIgPj4KL01lZGlhQm94IFswIDAgNjEyIDc5Ml0KL0Nyb3BCb3ggWzAgMCA2MTIgNzkyXQovQ29udGVudHMgNCAwIFIKL1RodW1iIDExIDAgUgo+PgplbmRvYmoKNCAwIG9iago8PAovTGVuZ3RoIDUgMCBSCj4+CnN0cmVhbQpxCjEgMCAwIDEgMCAwIGNtCi9JbTAgRG8KUQoKZW5kc3RyZWFtCmVuZG9iago1IDAgb2JqCjI3CmVuZG9iago2IDAgb2JqClsgL1BERiAvVGV4dCAvSW1hZ2VDIF0KZW5kb2JqCjcgMCBvYmoKPDwKPj4KZW5kb2JqCjggMCBvYmoKPDwKL1R5cGUgL1hPYmplY3QKL1N1YnR5cGUgL0ltYWdlCi9OYW1lIC9JbTAKL0ZpbHRlciBbIC9SdW5MZW5ndGhEZWNvZGUgXQovV2lkdGggMQovSGVpZ2h0IDEKL0NvbG9yU3BhY2UgMTAgMCBSCi9CaXRzUGVyQ29tcG9uZW50IDgKL1NNYXNrIDE1IDAgUgovTGVuZ3RoIDkgMCBSCj4+CnN0cmVhbQoAAIAKZW5kc3RyZWFtCmVuZG9iago5IDAgb2JqCjMKZW5kb2JqCjEwIDAgb2JqCi9EZXZpY2VHcmF5CmVuZG9iagoxMSAwIG9iago8PAovRmlsdGVyIFsgL1J1bkxlbmd0aERlY29kZSBdCi9XaWR0aCAxCi9IZWlnaHQgMQovQ29sb3JTcGFjZSAxMCAwIFIKL0JpdHNQZXJDb21wb25lbnQgOAovTGVuZ3RoIDEyIDAgUgo+PgpzdHJlYW0KAACACmVuZHN0cmVhbQplbmRvYmoKMTIgMCBvYmoKMwplbmRvYmoKMTMgMCBvYmoKPDwKPj4KZW5kb2JqCjE0IDAgb2JqCjMKZW5kb2JqCjE1IDAgb2JqCjw8Ci9UeXBlIC9YT2JqZWN0Ci9TdWJ0eXBlIC9JbWFnZQovTmFtZSAvTWEwCi9GaWx0ZXIgWyAvUnVuTGVuZ3RoRGVjb2RlIF0KL1dpZHRoIDEKL0hlaWdodCAxCi9Db2xvclNwYWNlIC9EZXZpY2VHcmF5Ci9CaXRzUGVyQ29tcG9uZW50IDgKL0xlbmd0aCAxNiAwIFIKPj4Kc3RyZWFtCgAAgAplbmRzdHJlYW0KZW5kb2JqCjE2IDAgb2JqCjMKZW5kb2JqCjE3IDAgb2JqCjw8Ci9UaXRsZSAoYSkKL0NyZWF0aW9uRGF0ZSAoRDoyMDE3MDEzMDAwMjUxMikKL01vZERhdGUgKEQ6MjAxNzAxMzAwMDI1MTIpCi9Qcm9kdWNlciAoSW1hZ2VNYWdpY2sgNi45LjEtMTAgUTE2IHg4Nl82NCAyMDE1LTA3LTI2IGh0dHA6Ly93d3cuaW1hZ2VtYWdpY2sub3JnKQo+PgplbmRvYmoKeHJlZgowIDE4CjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDAxMCAwMDAwMCBuIAowMDAwMDAwMDU5IDAwMDAwIG4gCjAwMDAwMDAxMTggMDAwMDAgbiAKMDAwMDAwMDMwMCAwMDAwMCBuIAowMDAwMDAwMzgwIDAwMDAwIG4gCjAwMDAwMDAzOTggMDAwMDAgbiAKMDAwMDAwMDQzNiAwMDAwMCBuIAowMDAwMDAwNDU3IDAwMDAwIG4gCjAwMDAwMDA2NTYgMDAwMDAgbiAKMDAwMDAwMDY3MyAwMDAwMCBuIAowMDAwMDAwNzAxIDAwMDAwIG4gCjAwMDAwMDA4NDYgMDAwMDAgbiAKMDAwMDAwMDg2NCAwMDAwMCBuIAowMDAwMDAwODg2IDAwMDAwIG4gCjAwMDAwMDA5MDQgMDAwMDAgbiAKMDAwMDAwMTA5NiAwMDAwMCBuIAowMDAwMDAxMTE0IDAwMDAwIG4gCnRyYWlsZXIKPDwKL1NpemUgMTgKL0luZm8gMTcgMCBSCi9Sb290IDEgMCBSCi9JRCBbPGFmNTU3MGY1YTE4MTBiN2FmNzhjYWY0YmM3MGE2NjBmMGRmNTFlNDJiYWY5MWQ0ZGU1YjIzMjhkZTBlODNkZmM+IDxhZjU1NzBmNWExODEwYjdhZjc4Y2FmNGJjNzBhNjYwZjBkZjUxZTQyYmFmOTFkNGRlNWIyMzI4ZGUwZTgzZGZjPl0KPj4Kc3RhcnR4cmVmCjEyOTAKJSVFT0YK'
};

export default util;