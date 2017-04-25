public class MainThemeController {
    public static String getLookupFieldValue(Sobject record, String fieldAPIName) {
        List<String> fieldAPIRelNames = fieldAPIName.split('\\.');

        SObject obj = record;
        String fieldValue;
        for (Integer i = 0; i < fieldAPIRelNames.size() ; i++) {
            String pathName = fieldAPIRelNames[i];
            if (i == fieldAPIRelNames.size() - 1) {
                fieldValue = (obj == null) ? null : (String)obj.get(pathName);
            } else {
                obj = obj.getSObject(pathName);
            }
        }
        return fieldValue;
    }
}