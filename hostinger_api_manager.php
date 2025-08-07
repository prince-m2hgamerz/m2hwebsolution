<?php
// === CONFIGURATION ===
$apiKey = 'YFb5xKDrwdWVOtMNayvqSvBGhk5ocJlK9MQHoG7Ke7a0418d';
$apiBase = 'https://api.hostinger.com';

// === Full API Endpoint List with Labels ===
// This list is based on the Hostinger API documentation as of October 2023.
// It includes all endpoints with their HTTP methods and paths.
// The endpoints are grouped by functionality for easier navigation.
// Note: Ensure you have the necessary permissions to access these endpoints with your API key.
// The API key provided is a placeholder and should be replaced with your actual API key.       
$endpoints = [
    "GET /api/billing/v1/catalog",
    "POST /api/billing/v1/orders",
    "GET /api/billing/v1/payment-methods",
    "POST /api/billing/v1/payment-methods/{paymentMethodId}",
    "DELETE /api/billing/v1/payment-methods/{paymentMethodId}",
    "GET /api/billing/v1/subscriptions",
    "DELETE /api/billing/v1/subscriptions/{subscriptionId}",
    "GET /api/dns/v1/zones/{domain}",
    "GET /api/dns/v1/snapshots/{domain}",
    "GET /api/dns/v1/snapshots/{domain}/{snapshotId}",
    "POST /api/dns/v1/snapshots/{domain}/{snapshotId}/restore",
    "GET /api/domains/v1/whois",
    "POST /api/domains/v1/whois",
    "GET /api/domains/v1/whois/{whoisId}",
    "DELETE /api/domains/v1/whois/{whoisId}",
    "GET /api/domains/v1/whois/{whoisId}/usage",
    "GET /api/vps/v1/data-centers",
    "GET /api/vps/v1/firewall",
    "POST /api/vps/v1/firewall",
    "GET /api/vps/v1/firewall/{firewallId}",
    "DELETE /api/vps/v1/firewall/{firewallId}",
    "GET /api/vps/v1/post-install-scripts",
    "DELETE /api/vps/v1/post-install-scripts/{postInstallScriptId}",
    "GET /api/vps/v1/public-keys",
    "POST /api/vps/v1/public-keys",
    "DELETE /api/vps/v1/public-keys/{publicKeyId}",
    "GET /api/vps/v1/templates",
    "GET /api/vps/v1/templates/{templateId}",
    "GET /api/vps/v1/virtual-machines",
    "GET /api/vps/v1/virtual-machines/{virtualMachineId}",
    "GET /api/vps/v1/virtual-machines/{virtualMachineId}/actions",
    "GET /api/vps/v1/virtual-machines/{virtualMachineId}/actions/{actionId}",
    "GET /api/vps/v1/virtual-machines/{virtualMachineId}/public-keys",
    "GET /api/vps/v1/virtual-machines/{virtualMachineId}/backups",
    "POST /api/vps/v1/virtual-machines/{virtualMachineId}/backups/{backupId}/restore",
    "PUT /api/vps/v1/virtual-machines/{virtualMachineId}/hostname",
    "DELETE /api/vps/v1/virtual-machines/{virtualMachineId}/hostname"
];

// === Handle Form Submission ===
$response = '';
$httpCode = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $selected = explode(' ', $_POST['endpoint'], 2);
    $method = $_POST['method'] ?: $selected[0];
    $endpoint = $selected[1] ?? '';
    $body = trim($_POST['body'] ?? '');
    $url = $apiBase . $endpoint;

    $headers = [
        "Authorization: Bearer $apiKey",
        "Content-Type: application/json"
    ];

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, strtoupper($method));
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    if (in_array($method, ['POST', 'PUT']) && !empty($body)) {
        curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
    }

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Hostinger API Manager</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 40px; background: #f4f4f4; }
        form, .result { background: #fff; padding: 20px; margin-top: 20px; border-radius: 10px; box-shadow: 0 0 8px #ccc; }
        input, select, textarea { width: 100%; padding: 10px; margin: 10px 0; }
        .success { border-left: 5px solid green; }
        .error { border-left: 5px solid red; }
    </style>
    <script>
        function filterEndpoints() {
            let input = document.getElementById("search").value.toLowerCase();
            let options = document.getElementById("endpoint").options;
            for (let i = 0; i < options.length; i++) {
                let txt = options[i].text.toLowerCase();
                options[i].style.display = txt.includes(input) ? "" : "none";
            }
        }
    </script>
</head>
<body>

<h2>🔧 Hostinger API Manager</h2>

<input type="text" id="search" onkeyup="filterEndpoints()" placeholder="Search API endpoint...">

<form method="POST">
    <label>Select API Endpoint</label>
    <select name="endpoint" id="endpoint" required>
        <option value="">-- Select Endpoint --</option>
        <?php foreach ($endpoints as $ep): ?>
            <option value="<?= htmlspecialchars($ep) ?>" <?= (isset($_POST['endpoint']) && $_POST['endpoint'] == $ep ? 'selected' : '') ?>>
                <?= htmlspecialchars($ep) ?>
            </option>
        <?php endforeach; ?>
    </select>

    <label>Optional: Override Method (GET, POST, PUT, DELETE)</label>
    <select name="method">
        <option value="">-- Use default from endpoint --</option>
        <?php foreach (['GET', 'POST', 'PUT', 'DELETE'] as $m): ?>
            <option value="<?= $m ?>" <?= (isset($_POST['method']) && $_POST['method'] == $m ? 'selected' : '') ?>><?= $m ?></option>
        <?php endforeach; ?>
    </select>

    <label>JSON Body (for POST/PUT)</label>
    <textarea name="body" rows="8" placeholder='{"example": "value"}'><?= htmlspecialchars($_POST['body'] ?? '') ?></textarea>

    <input type="submit" value="Execute API Request">
</form>

<?php if ($_SERVER['REQUEST_METHOD'] === 'POST'): ?>
    <div class="result <?= $httpCode >= 200 && $httpCode < 300 ? 'success' : 'error' ?>">
        <strong>HTTP <?= $httpCode ?> Response:</strong><br><br>
        <pre><?= htmlspecialchars(json_encode(json_decode($response), JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES)) ?></pre>
    </div>
<?php endif; ?>

</body>
</html>
