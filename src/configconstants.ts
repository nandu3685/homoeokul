// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// tslint:disable: variable-name
export class CoreConfigConstants {
    static app_id = 'com.homoeokul';
    static appname = 'Homoeokul';
    static desktopappname = 'Homoeokul Desktop';
    static versioncode = 100;
    static versionname = '1.0.0';
    static cache_expiration_time = 300000;
    static default_lang = 'en';
    static languages: any = {
        'ar': 'عربي',
        'bg': 'Български',
        'ca': 'Català',
        'cs': 'Čeština',
        'da': 'Dansk',
        'de': 'Deutsch',
        'de-du': 'Deutsch - Du',
        'el': 'Ελληνικά',
        'en': 'English',
        'es': 'Español',
        'es-mx': 'Español - México',
        'eu': 'Euskara',
        'fa': 'فارسی',
        'fi': 'Suomi',
        'fr': 'Français',
        'he': 'עברית',
        'hu': 'magyar',
        'it': 'Italiano',
        'ja': '日本語',
        'ko': '한국어',
        'lt': 'Lietuvių',
        'mr': 'मराठी',
        'nl': 'Nederlands',
        'pl': 'Polski',
        'pt-br': 'Português - Brasil',
        'pt': 'Português - Portugal',
        'ro': 'Română',
        'ru': 'Русский',
        'sr-cr': 'Српски',
        'sr-lt': 'Srpski',
        'sv': 'Svenska',
        'tr': 'Türkçe',
        'uk': 'Українська',
        'zh-cn': '简体中文',
        'zh-tw': '正體中文'
    };
    static wsservice = 'moodle_mobile_app';
    static wsextservice = 'local_mobile';
    static demo_sites = '';
    static gcmpn = '694767596569';
    static customurlscheme = 'moodlemobile';
    static siteurl = 'https://homoeokul.com/learn';
    static multisitesdisplay = '';
    static skipssoconfirmation = false;
    static forcedefaultlanguage = false;
    static privacypolicy = 'https://moodle.org/mod/page/view.php?id=8148';
    static compilationtime = 1543667312288;
}
