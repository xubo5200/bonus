http_proxy: ""
language: ""
rlimit_nofile: 0
debug_pprof: false
web_session_ttl: 720
dns:
bind_host: 0.0.0.0
port: 5553
statistics_interval: 7
querylog_enabled: true
querylog_interval: 1
querylog_size_memory: 1000
anonymize_client_ip: false
protection_enabled: true
blocking_mode: default
blocking_ipv4: ""
blocking_ipv6: ""
blocked_response_ttl: 10
parental_block_host: family-block.dns.adguard.com
safebrowsing_block_host: standard-block.dns.adguard.com
ratelimit: 0
ratelimit_whitelist: []
refuse_any: true
upstream_dns:
- 127.0.0.1:6053
- 127.0.0.1:6553
bootstrap_dns:
- 114.114.114.114
- 1.1.1.1
- 2620:fe::10
- 2620:fe::fe:10
all_servers: false
fastest_addr: false
allowed_clients: []
disallowed_clients: []
blocked_hosts: []
cache_size: 4194304
cache_ttl_min: 0
cache_ttl_max: 0
bogus_nxdomain: []
aaaa_disabled: false
enable_dnssec: false
edns_client_subnet: false
filtering_enabled: true
filters_update_interval: 24
parental_enabled: false
safesearch_enabled: false
safebrowsing_enabled: false
safebrowsing_cache_size: 1048576
safesearch_cache_size: 1048576
parental_cache_size: 1048576
cache_time: 30
rewrites: []
blocked_services: []
tls:
enabled: false
server_name: ""
force_https: false
port_https: 443
port_dns_over_tls: 853
allow_unencrypted_doh: false
strict_sni_check: false
certificate_chain: ""
private_key: ""
certificate_path: ""
private_key_path: ""
filters:
- enabled: true
url: https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/filters.txt
name: uBlock filters
id: 1587388244
- enabled: true
url: https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/badware.txt
name: uBlock filters – Badware risks
id: 1587388245
- enabled: true
url: https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/privacy.txt
name: uBlock filters – Privacy
id: 1587394825
- enabled: true
url: https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/resource-abuse.txt
name: uBlock filters – Resource abuse
id: 1587394826
- enabled: true
url: https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/unbreak.txt
name: uBlock filters -- Unbreak
id: 1587394827
- enabled: true
url: https://filters.adtidy.org/extension/ublock/filters/2_without_easylist.txt
name: AdGuard Base filter
id: 1587394828
- enabled: true
url: https://filters.adtidy.org/extension/chromium/filters/2.txt
name: AdGuard Base filter
id: 1587394829
- enabled: true
url: https://filters.adtidy.org/extension/ublock/filters/11.txt
name: AdGuard Mobile Ads filter
id: 1587394830
- enabled: true
url: https://easylist.to/easylist/easylist.txt
name: EasyList
id: 1587394831
- enabled: true
url: https://easylist.to/easylist/easyprivacy.txt
name: EasyPrivacy
id: 1587394832
- enabled: true
url: https://gitcdn.xyz/cdn/NanoMeow/MDLMirror/d043946ce8ccfdd99a36f224924849616d692c64/hosts.txt
name: Malware Domain List
id: 1587394833
- enabled: true
url: https://mirror.cedia.org.ec/malwaredomains/justdomains
name: justdomains
id: 1587394834
- enabled: true
url: https://pgl.yoyo.org/adservers/serverlist.php?hostformat=hosts&showintro=1&mimetype=plaintext
name: Peter Lowe’s Ad and tracking server list
id: 1587394835
- enabled: true
url: https://raw.githubusercontent.com/cjx82630/cjxlist/master/cjxlist.txt
name: CJX's EasyList Lite
id: 1587394836
- enabled: true
url: https://raw.githubusercontent.com/vokins/yhosts/master/data/tvbox.txt
name: tvbox
id: 1575018007
- enabled: true
url: https://hosts.nfz.moe/full/hosts
name: neoHosts full
id: 1575618240
- enabled: true
url: https://hosts.nfz.moe/basic/hosts
name: neoHosts basic
id: 1575618241
- enabled: true
url: http://sbc.io/hosts/hosts
name: StevenBlack host basic
id: 1575618242
- enabled: true
url: https://cdn.jsdelivr.net/gh/privacy-protection-tools/anti-AD/anti-ad-easylist.txt
name: anti-AD(Adblock+neohosts+yhosts+cjxlist+adhlist)
id: 1577113202
- enabled: true
url: https://gitee.com/xinggsf/Adblock-Rule/raw/master/rule.txt
name: 码云
id: 1592991052
- enabled: true
url: https://gitee.com/xinggsf/Adblock-Rule/raw/master/mv.txt
name: MV
id: 1592991053
- enabled: true
url: http://sub.adtchrome.com/adt-chinalist-easylist.txt
name: ChinaList+EasyList(修正)
id: 1592991058
- enabled: true
url: https://www.daxiaamu.com/wp-content/uploads/files/blocklist.txt
name: blocklist
id: 1592991065
- enabled: true
url: http://git.oschina.net/halflife/list/raw/master/ad.txt
name: My AdFilters
id: 1592991067
- enabled: true
url: https://filters.adtidy.org/extension/chromium/filters/10.txt
name: Filter unblocking search ads and self-promotion
id: 1592991069
- enabled: true
url: https://filters.adtidy.org/extension/chromium/filters/14.txt
name: AdGuard Annoyances filter
id: 1592991070
- enabled: true
url: https://filters.adtidy.org/extension/chromium/filters/3.txt
name: AdGuard Tracking Protection filter
id: 1592991071
- enabled: true
url: https://raw.githubusercontent.com/cjx82630/cjxlist/master/cjx-annoyance.txt
name: CJX's Annoyance List
id: 1593149805
- enabled: true
url: https://easylist-downloads.adblockplus.org/easylistchina.txt
name: EasyList China
id: 1593149807
whitelist_filters: []
user_rules:
- ""
dhcp:
enabled: false
interface_name: ""
gateway_ip: ""
subnet_mask: ""
range_start: ""
range_end: ""
lease_duration: 86400
icmp_timeout_msec: 1000
clients: []
log_file: ""
verbose: false
schema_version: 6